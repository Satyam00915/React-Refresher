import React from "react";
import Count from "./CustomHooks/Count";
import Fetch from "./CustomHooks/Fetch";
import Prev from "./CustomHooks/Prev";
import { Debounce } from "./CustomHooks/Debounce";

const App = () => {
  return (
    <div style={{ display: "flex", gap: 15 }}>
      {/* <Count /> */}
      {/* <Fetch /> */}
      {/* <Prev /> */}
      <Debounce />
    </div>
  );
};

export default App;
