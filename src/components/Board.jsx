import React from 'react';
import Square from './Square';

class Board extends React.Component{

  renderSquare(i) {

    return <Square/>;
  }

  render(){
    const boardStyle = {
      display: 'flex',
      flexFlow: 'row nowrap',
      boxSizing: 'border-box',
      border: '3px solid black',
      backgroundColor: 'lavender',
    };

    return(
      <div style={boardStyle}>board works</div>
    );

  }
}
export default Board;
