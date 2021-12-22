import React from 'react';
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const iconX = <FontAwesomeIcon icon={faHeart} />;




class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 'status': 0 };

  }

  handleClick = () => {
    if (this.state.status === 0) {
      this.setState({ status: 1 });
    } else {
      this.setState({ status: this.state.status + 1 });

    }
    console.log(this.props.title);
    this.props.sendBackData(this.props.title);
  }


  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.imgalt} title={this.props.imgtitle} keyword={this.props.keyword} onClick={this.handleClick}
        ></img>
        <p>{this.props.description}</p>
        <p>Horns: {this.props.horns}</p>
        <h3>{iconX}{this.state.status}</h3>
      </>
    );
  }

}



export default HornedBeast;
