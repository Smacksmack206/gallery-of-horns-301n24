import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './data.json';
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      show: false,
      result: 0,
    };
  }

  showSelectedBeast = () => {
    this.setState({show: true});
  }

  onHide = () => {
    this.setState({show: false});
  }

  sendBackData = (title) => {
    // Take in selected beast title as an argument
    // Then use a find method, search over the beast data and find the match
    console.log(title);
    const result = json.find( (element) => element.title === this.title);
    // Save it in state once a match is found
    this.setState({result, show: true});
    // Passed the saved state to selectedbeast componnet
  };

  render() {
    return (
      <div className="App">
        <Container />
        <Header />
        <Main json={json} showSelectedBeast={this.props.showSelectedBeast} sendBackData={this.sendBackData}/>
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} result={this.state.result} json={json}/>
      </div>
    );
  }
}

export default App;
