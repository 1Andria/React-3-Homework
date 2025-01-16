import React from "react";
import "./VerbalImage.css";
import VerbalImg from "../../../assets/Images/verbal.svg";

function VerbalImage() {
  return (
    <div className="verb">
      <img src={VerbalImg} alt="chat" />
      <h className="verbaltxt">Verbal</h>
    </div>
  );
}
export default VerbalImage;
