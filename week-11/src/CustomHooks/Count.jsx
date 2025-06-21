import React, { useState } from "react";

//CUSTOM HOOK
function useCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((c) => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

const Count = () => {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      {count}
      {"   "}
      <button onClick={increaseCount}>Tap</button>
    </div>
  );
};

export default Count;
