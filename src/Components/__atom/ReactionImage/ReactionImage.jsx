import React from "react";
import "./ReactionImage.css";
import Flash from "../../../assets/Images/flash.svg";

function ReactionImage() {
  return (
    <div className="react_div">
      <img src={Flash} alt="flash" />
      <h className="react">Reaction</h>
    </div>
  );
}

export default ReactionImage;
