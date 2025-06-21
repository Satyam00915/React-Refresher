import React, { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();

  //Whenever a useEffect is used it returns first and a useEffect is called later

  useEffect(() => {
    ref.current = value;
    console.log("effect" + ref.current);
  }, [value]);

  return ref.current;
};
