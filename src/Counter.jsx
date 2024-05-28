import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={(count, setCount)}>
      {children}
    </CounterContext.Provider>
  );
}
function Incres() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount((e) => e++)}>Incres</button>;
}
function Decres() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount((e) => e--)}>Decres</button>;
}
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
Counter.Incres = Incres;
Counter.Decres = Decres;
Counter.Count = Count;

export default Counter;
