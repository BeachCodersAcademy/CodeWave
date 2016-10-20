/*
When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

shouldComponentUpdate should return either true or false.

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do.
*/
var React = require('react');

var Example = React.createClass({
  getInitialState: function () {
    return { subtext: 'Put me in an <h2> please.' };
  },
  
  shouldComponentUpdate: function (nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
    (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  },
  
  render: function () {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
});