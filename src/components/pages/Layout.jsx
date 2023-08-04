import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./home/nav/Nav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
