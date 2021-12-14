import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.src} alt={this.props.imgalt} title={this.props.imgtitle} keyword={this.props.keyword}></img>
        <p>{this.props.description}</p>
        <p>Horns: {this.props.horns}</p>
      </>
    );
  }
   
}



export default HornedBeast;
