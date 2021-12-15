import React from 'react';

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
  }


  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.imgalt} title={this.props.imgtitle} keyword={this.props.keyword} onClick={this.handleClick}
        ></img>
        <p>{this.props.description}</p>
        <p>Horns: {this.props.horns}</p>
        <h3>{this.state.status}</h3>
        {/* <p>Favorites: {this.state.fav}</p> */}
      </>
    );
  }

}



export default HornedBeast;
