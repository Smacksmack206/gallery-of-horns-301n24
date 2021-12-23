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
      selectedBeast: {},
      updatingbeast: json
    };
  }

  onHide = () => {
    this.setState({ show: false });
  }

  sendBackData = (title) => {
    // Take in selected beast title as an argument
    // Then use a find method, search over the beast data and find the match
    console.log(title);
    const selectedBeast = json.find((element) => element.title === title);
    console.log(selectedBeast);

    // Save it in state once a match is found
    this.setState({ selectedBeast: selectedBeast, show: true });
    // Passed the saved state to selectedbeast componnet
  };

  updateBeast = (updatingbeast) => {
    console.log(updatingbeast);
    // Save it in state once a match is found
    this.setState({ updatingbeast: updatingbeast });
  }
  render() {
    return (
      <div className="App">
        <Container />
        <Header />
        <Main json={this.state.updatingbeast} showSelectedBeast={this.props.showSelectedBeast} sendBackData={this.sendBackData} updateBeast={this.updateBeast} updatingbeast={this.state.updatingbeast} />
        <Footer />
        <SelectedBeast show={this.state.show} onHide={this.onHide} result={this.state.result} selectedBeast={this.state.selectedBeast} />
      </div>
    );
  }
}

export default App;

