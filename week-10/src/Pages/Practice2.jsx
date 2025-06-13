import React, { useRef } from "react";

const Practice2 = () => {
  const ref = useRef(null);
  return (
    <div>
      <div
        ref={ref}
        style={{
          backgroundColor: "yellow",
          width: "50vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Satyam
      </div>
      <button
        onClick={() => {
          ref.current.style.backgroundColor = "black";
          ref.current.style.color = "white";
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Practice2;
