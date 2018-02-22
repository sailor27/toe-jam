import React from 'react';

class Square extends React.Component{
  render(){
    console.log(this.props);
    const squareStyle = {
      boxSizing: 'border-box',
      border: '3px solid black',
      backgroundColor: 'lavender',
    };
    return(
      <button className="square" style={squareStyle} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
