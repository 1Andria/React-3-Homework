import React from "react";
import "./MainContainer.css";
import Purple from "../PurpleContainer/Purple";
import Performance from "../PerformanceContainer/Performance";
function MainContainer() {
  return (
    <div className="container">
      <Purple />
      <Performance />
    </div>
  );
}

export default MainContainer;
