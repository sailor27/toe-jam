import React from 'react';

class Square extends React.Component{

  render(){
    const squareStyle = {
      boxSizing: 'border-box',
      border: '3px solid black',
      backgroundColor: 'lavender',
      width: '20px'
    };
    return(
      <button style={squareStyle}>
        something here
      </button>
    );
  }
}

export default Square;
