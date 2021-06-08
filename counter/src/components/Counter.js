import React, { useContext} from 'react';

import {CounterContext} from '../CounterContext';

function Counter(props){
const [score, setScore] = useContext(CounterContext);
return (
  <div>
  <div>{score}</div>
  <button onClick={()=>{setScore(prev=>prev - 1)}}>-</button>
  <button onClick={()=>{setScore(prev=>prev + 1)}}>+</button>
  </div>
);
}

export default Counter;