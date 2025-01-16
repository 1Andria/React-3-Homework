import React from "react";
import "./VisualImage.css";
import Eye from "../../../assets/Images/eye.svg";
function VisualImage() {
  return (
    <div className="visdiv">
      <img src={Eye} alt="eye" />
      <h className="Visualtxt">VIsual</h>
    </div>
  );
}
export default VisualImage;
