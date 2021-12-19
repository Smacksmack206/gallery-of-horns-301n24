import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './data.json';
import Modal from 'react-bootstrap/Modal';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      result: 0,
    };
  }

  render() {

    let allbeast = [];
    json.map(element => {
      let beast = <Card className="mt-5"> <HornedBeast title={element.title} src={element.image_url} description={element.description} imgtitle={'Unicorn'} imgalt={'Alt coming soon'} keyword={element.keyword} horns={element.horns} sendBackData={this.props.sendBackData} /> </Card>;
      allbeast.push(beast);
    });

    return (
      <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">

          {allbeast}

        </Row>

        <Modal />
      </Container>
    );
  }
  hornedCall = () => {
    fetch('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json')
      .then(response => response.json())
      .then(json => (json));
  };
}



export default Main;
