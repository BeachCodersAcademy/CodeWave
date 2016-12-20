// Child.js
let React = require('react');

let Child = React.createClass({
  
  handleChange: function(e) {
    let name = e.target.value;
    this.props.onChange(name);
  },
  
  render: function () {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
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

let Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Frarthur' };
  },
  
  changeName: function(newName) {
    this.setState({
      name: newName
    });
  },

  render: function () {
    return (
    	<Child 
    		name={this.state.name}
        onChange={this.changeName}/>
    );
  }
});

ReactDOM.render(
	<Parent />, 
	document.getElementById('app')
);