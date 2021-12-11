import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src="" alt="" title="">{this.props.img}</img>
            <p>{this.props.p}</p>
            </>
        )
    }
}

export default HornedBeast;