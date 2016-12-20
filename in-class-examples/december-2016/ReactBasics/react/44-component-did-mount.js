/*If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.
*/
var React = require('react');

var Example = React.createClass({
  componentDidlMount: function () {
    alert('component just finished mounting!');
  },

  render: function () {
    return <h1>Hello world</h1>;
  }
});