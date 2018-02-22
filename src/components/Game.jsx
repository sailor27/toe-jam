import React from 'react';
import Board from './board';


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [
        {
        squares: Array(9).fill(null),
        }
      ],
      xIsNext: true;
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length -1 ];

    const squares = current.squares.slice();


    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares:squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render(){
    return(
      <div className="game">
        <Board/>
        <div>
          <div>{/*status*/}</div>
          <ol>{/*TO Do*/}</ol>
        </div>
      </div>
    );

  }
}

export default Game;
