// BookList.js
var React = require('react');
var ReactDOM = require('react-dom');
var BestSeller = require('./BestSeller');

var BookList = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller 
              title="Glory and War Stuff for Dads" 
              author="Sir Eldrich Van Hoorsgaard" 
              weeksOnList={10} />
            <BestSeller 
              title="The Crime Criminals!" 
              author="Brenda Sqrentun" 
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers" 
              author="Malcolm McLaren" 
              weeksOnList={600} />
          </ol>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<BookList />, document.getElementById('app'));

// BestSeller.js
var React = require('react');

var BestSeller = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    weeksOnList: React.PropTypes.number.isRequired
  },
  
  render: function () {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
});

module.exports = BestSeller;