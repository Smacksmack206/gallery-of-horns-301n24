import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      selectedBeast: {},
    };
  }


  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide} >
          <Modal.Header closeButton>
            <Modal.Title>Beast connected</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              <Card.Img src={this.props.selectedBeast.image_url} alt={'#'} />
              <Card.Text>
                {this.props.selectedBeast.description}              </Card.Text>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

}

export default SelectedBeast;
