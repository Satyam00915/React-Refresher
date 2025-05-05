import { Children, useEffect, useState } from "react";
import "./App.css";
import { EffectUnmount } from "./Topics/EffectUnmount";
import { ChildrenProp } from "./Topics/ChildrenProp";
import ErrorBoundaryCard from "./Topics/ErrorBoundary";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: 5 }}>
        {/* Effect Return Unmount */}
        {/* <EffectUnmount /> */}

        {/*Children Prop */}
        {/* <ChildrenProp /> */}


        {/* Error Boundary */}
        {/* <ErrorBoundaryCard /> */}
      </div>
    </>
  );
}

export default App;
