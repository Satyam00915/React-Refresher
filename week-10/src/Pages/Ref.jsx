import React, { useEffect, useRef } from "react";

export const Ref = () => {
  const inputRef = useRef(null);
  const input2Ref = useRef(null);
  function focusOnInput() {
    input2Ref.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      Sign Up <br />
      <input type="number" ref={inputRef} />
      <br />
      <input type="number" ref={input2Ref} />
      <br />
      <button onClick={focusOnInput}>SignUp</button>
    </div>
  );
};
