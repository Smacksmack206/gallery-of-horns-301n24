import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      result: 0,
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
              <Card.Img src={this.state.result.image_url} alt={'this is an image'} />
              <Card.Text>
                Beast description coming soon
              </Card.Text>
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
