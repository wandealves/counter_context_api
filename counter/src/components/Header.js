import React, { useContext } from 'react';

import {CounterContext} from '../CounterContext';

function Header(props){
  const [score, setScore] = useContext(CounterContext);
  return (
    <div className="header">
    <h3>Counter</h3>
    <div>{score}</div>
    </div>
  );
}

export default Header;