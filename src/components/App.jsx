import React from 'react';
import Board from './Board';

function App() {

  return(
    <div>App works
    <Board/>
    <style global jsx>
      {`
          body{
            box-sixing: border-box;
            background-color: #FFFAFA;

            font-size: 5em;
            font-family: monospace;
            margin: 20px;
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
            height: 200px;
            margin-right: -1px;
            margin-top: -1px;
            padding: 0;
            text-align: center;
            width: 200px;
          }

          .square:focus {
            outline: none;
          }

          game {
            display: flex;
            flex-direction: row;
          }

        `}
    </style>
    </div>
  );
}

export default App;
