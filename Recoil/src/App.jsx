import React from "react";
import { CounterContext, CounterProvider } from "./Context/Context";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./Atoms/Atom";

const App = () => {
  return (
    <div>
      <Counter />
      <Increase />
      <Decrease />
    </div>
  );
};

export default App;

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
        setCount((c) => c - 1);
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
        setCount((c) => c + 1);
      }}
    >
      Increase
    </button>
  );
}
