let React = require('react');
import Navbar from './Navbar';

export default class Header extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Welcome to Fruits and Salads!</h1>
        <a href="#">Click here for more info!</a>
        <Navbar />
      </div>
    );
  }
  
}