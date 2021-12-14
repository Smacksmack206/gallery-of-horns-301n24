import React from "react";
import HornedBeast from "./HornedBeast";

// import Img from '../img/uni.jpeg'


class Main extends React.Component {
  render() {
    return (
      <>
        <p>Some text</p>
        <HornedBeast title={'Unix'} src={'https://live.staticflickr.com/8334/8136494613_8e8c23dbba_b.jpg'} description={'First of the legendary Horned Beast!'} />
        <HornedBeast title={'Linux'} src={'https://www.greenbiz.com/sites/default/files/images/articles/featured/unicorn_sstock.jpg'} description={'Second of the legendary Horned Beast!'} />
      </>
    );
  }
}

export default Main;
