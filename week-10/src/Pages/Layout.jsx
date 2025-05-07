import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>Allen || Class-11 || Class-12</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};
