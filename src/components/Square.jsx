import React from 'react';

class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render(){
    console.log(this.props);
    const squareStyle = {
      boxSizing: 'border-box',
      border: '3px solid black',
      backgroundColor: 'lavender',
    };
    return(
      <button className="square"style={squareStyle} onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
