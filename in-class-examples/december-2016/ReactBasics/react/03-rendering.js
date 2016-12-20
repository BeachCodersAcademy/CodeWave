let ReactDOM = require('react-dom');

let goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

let gooseImg = <img src={goose} />;

ReactDOM.render(gooseImg, document.getElementById('app'));
