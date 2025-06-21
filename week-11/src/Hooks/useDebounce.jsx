import React, { useEffect, useState } from "react";

export const useDebounce = (value) => {
  const [data, setData] = useState("value");
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(value);
      setData(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return data;
};
