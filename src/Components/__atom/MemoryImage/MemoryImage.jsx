import React from "react";
import "./MemoryImage.css";
import Brain from "../../../assets/Images/brain.svg";
function MemoryImage() {
  return (
    <div className="memory_div">
      <img src={Brain} alt="brain" />
      <h className="memory">Memory</h>
    </div>
  );
}
export default MemoryImage;
