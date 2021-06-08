import React, {useState, createContext} from 'react';

export const CounterContext = createContext();

export function CounterProvider(props){
  const [score, setScore] = useState(0);

  return(
    <CounterContext.Provider value={[score, setScore]}>
    {props.children}
    </CounterContext.Provider>
  );
}