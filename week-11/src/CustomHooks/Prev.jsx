import React, { useRef, useState } from "react";
import { usePrev } from "../Hooks/usePrev";

const Prev = () => {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(false);
  const ref = useRef();
  const prev = usePrev(count);
  console.log(prev);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          clearTimeout(ref.current);
          ref.current = setTimeout(() => {
            console.log("called");
            setRender((c) => !c);
          }, 5000);
        }}
      >
        Click me
      </button>

      {/* <button onClick={() => }>re render</button> */}

      <p>The previos value is {prev}</p>
    </div>
  );
};

export default Prev;
