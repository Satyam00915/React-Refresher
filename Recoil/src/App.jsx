import React from "react";
import { CounterContext, CounterProvider } from "./Context/Context";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./Atoms/Atom";

const App = () => {
  return (
    <div>
      <Counter />
      <IsEven />
      <Increase />
      <Decrease />
    </div>
  );
};

export default App;

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}
function Counter() {
  // const { count } = useContext(CounterContext);
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Decrease() {
  // const { setCount } = useContext(CounterContext);
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button
      onClick={() => {
        setCount((c) => c - 2);
      }}
    >
      Decrease
    </button>
  );
}

function Increase() {
  // const { setCount } = useContext(CounterContext);
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button
      onClick={() => {
        setCount((c) => c + 2);
      }}
    >
      Increase
    </button>
  );
}
