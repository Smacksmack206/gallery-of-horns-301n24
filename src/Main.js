import React from "react";
import HornedBeast from "./HornedBeast";


// import Img from '../img/uni.jpeg'


class Main extends React.Component {
  render() {

    let allbeast = [];
    const json = [
      {
        'keyword': 'somebeast',
        'src': 'https://live.staticflickr.com/8334/8136494613_8e8c23dbba_b.jpg'
      }
    ];
    json.forEach(element => {
      let beast = <HornedBeast title={'Unix'} src={element.src} description={'First of the legendary Horned Beast!'} imgtitle={'Unicorn'} imgalt={'Alt coming soon'} keyword={element.keyword} />;
      allbeast.push(beast);
    });

    return (
      <>
      
        {allbeast}
        
      </>
    );
  }
  hornedCall = () => {
    fetch('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json')
      .then(response => response.json())
      .then(json => (json));
  };
}



export default Main;
