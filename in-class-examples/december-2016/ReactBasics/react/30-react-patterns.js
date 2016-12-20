// Sibling.js
let React = require('react');

let Sibling = React.createClass({
  render: function () {
    let name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
});

module.exports = Sibling;

// Child.js
let React = require('react');

let Child = React.createClass({
  handleChange: function (e) {
    let name = e.target.value;
    this.props.onChange(name);
  },
  
  render: function () {
    return (
      <div>
        <select 
          id="great-names" 
          onChange={this.handleChange}>
          
          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
});

module.exports = Child;

// Parent.js
let React = require('react');
let ReactDOM = require('react-dom');
let Child = require('./Child');
let Sibling = require('./Sibling');

let Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  changeName: function (newName) {
    this.setState({
      name: newName
    });
  },

  render: function () {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);