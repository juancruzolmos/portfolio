import { React } from "react";
import { Outlet } from "react-router-dom";
import "./css/work.css";

function Work() {
  return (
    <div className="work__container">
      <Outlet />
    </div>
  );
}

export default Work;
