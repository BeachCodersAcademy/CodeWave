let React = require('react');
import Footer from './Footer';
import Header from './Header';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <h1>Hello there!</h1>
        <Footer />
      </div>
    );
  }
  
}