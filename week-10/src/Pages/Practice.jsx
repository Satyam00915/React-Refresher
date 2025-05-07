import React, { useRef, useState } from "react";

const Practice = () => {
  //   const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(1);

  const timer = useRef(null);

  function Start() {
    const id = setInterval(() => {
      console.log(timer);
      setCount((c) => c + 1);
    }, 1000);
    // setTimer(id); //Bad Method
    timer.current = id;
  }

  function Stop() {
    clearInterval(timer.current);
  }

  return (
    <div>
      <div>{count}</div>

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
  );
};

export default Practice;
