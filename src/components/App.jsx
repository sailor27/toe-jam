import React from 'react';
import Game from './Game';

function App() {

  return(
    <div>
      <h1>🍇 toe jam 👣</h1>
      <Game/>
      <style global jsx>
        {`
          body{
            box-sixing: border-box;
            background-color: #FFFAFA;
            display: flex;
            justify-content: center;
            font-size: 5em;
            font-family: monospace;
            margin: 20px;
          }

          h1 {
            text-align:center;
          }

          ol, ul {
            padding-left: 30px;
          }

          .board-row:after {
            clear: both;
            content: "";
            display: table;
          }

          .status {
            margin-bottom: 10px;
          }

          .square {
            background: #fff;
            float: left;
            font-size: 2em;
            font-weight: bold;
            height: 150px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 150px;
            color: magenta;
          }

          .square:focus {
            outline: none;
          }

          .game {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

        `}
      </style>
    </div>
  );
}

export default App;
