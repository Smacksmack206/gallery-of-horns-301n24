import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <Container />
      </div>
    );
  }
}

export default App;
