/*
Lifecycle Method: getDefaultProps()

Invoked once and cached when the class is created. Values in the mapping will be set on this.props if that prop is not specified by the parent component (i.e. using an in check).

This method is invoked before any instances are created and thus cannot rely on this.props. In addition, be aware that any complex objects returned by getDefaultProps() will be shared across instances, not copied.
*/

let React = require('react');
let ReactDOM = require('react-dom');

let Button = React.createClass({
  getDefaultProps: function() {
    return {
      text: 'I am a button'
    };
  },
  
  render: function () {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
});

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);