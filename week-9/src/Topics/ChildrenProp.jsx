import React from "react";

export const ChildrenProp = () => {
  return (
    <div>
      <Card>
        <span style={{ color: "red" }}>Hi there</span>
      </Card>
      <Card>
        <span style={{ color: "yellow" }}>Hi there</span>
      </Card>
    </div>
  );
};

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: 5,
        padding: 5,
      }}
    >
      {children}
    </div>
  );
}
