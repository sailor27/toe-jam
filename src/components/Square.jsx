import React from 'react';

function Square(props){

  const squareStyle = {
    boxSizing: 'border-box',
    border: '3px solid black',
    backgroundColor: 'lavender',
  };
  return(
    <button className="square" style={squareStyle} onClick={ props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
