import React, { useContext } from "react";
import { BulbProvider } from "../Context/Context";
import { BulbContext } from "../Context/Context";

export const State = () => {
  // const [bulb, setBulb] = useState(true);

  return (
    <div>
      <BulbProvider>
        <BulbState />
        <ToggleBulbState />
      </BulbProvider>
    </div>
  );
};

const BulbState = () => {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
};

const ToggleBulbState = () => {
  const { setBulb } = useContext(BulbContext);
  return (
    <div>
      <button
        onClick={() => {
          setBulb((c) => !c);
        }}
      >
        Toggle Bulb State
      </button>
    </div>
  );
};
