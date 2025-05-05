import { Children, useEffect, useState } from "react";
import "./App.css";
import { EffectUnmount } from "./Topics/EffectUnmount";
import { ChildrenProp } from "./Topics/ChildrenProp";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: 5 }}>
        {/* Effect Return Unmount */}
        {/* <EffectUnmount /> */}

        {/*Children Prop */}
        <ChildrenProp />
      </div>
    </>
  );
}

export default App;
