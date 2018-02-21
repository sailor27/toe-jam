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
            margin: 0;
            background-color: #FFFAFA;

            font-size: 18px;
            font-family: monospace;

          }


        `}
    </style>
    </div>
  );
}

export default App;
