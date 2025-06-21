import React, { useEffect, useState } from "react";
import { useDebounce } from "../Hooks/useDebounce";

export const Debounce = () => {
  const [value, setValue] = useState("");
  const data = useDebounce(value);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div>{data}</div>
    </div>
  );
};
