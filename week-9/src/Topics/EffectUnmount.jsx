import React, { useEffect, useState } from "react";

export const EffectUnmount = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShow((c) => !c);
    }, 5000);
  }, []);
  return <>{show && <Timer />}</>;
};

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("incrementing..");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div>{count}</div>
    </>
  );
};
