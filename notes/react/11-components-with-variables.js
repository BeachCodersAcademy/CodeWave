let React = require('react');
let ReactDOM = require('react-dom');

let owl = {
  title: "Excellent Owl",
  src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

let Owl = React.createClass({
  render: function () {
    return (
      <div>
      <h1>{owl.title}</h1>
      <img
      src={owl.src}
      alt={owl.title}/>
      </div>
    );
  }
});

ReactDOM.render(<Owl />, document.getElementById('app'));