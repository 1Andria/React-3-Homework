import React from "react";
import "./Performance.css";
import Reaction from "../../__molecule/Reaction/Reaction";
import Memory from "../../__molecule/Memory/Memory";
import Verbal from "../../__molecule/Verbal/Verbal";
import Visual from "../../__molecule/Visual/Visual";
import Button from "../../__atom/Button/Button";

function Performance() {
  return (
    <div className="performance">
      <h className="summary">Summary</h>
      <Reaction />
      <Memory />
      <Verbal />
      <Visual />
      <Button />
    </div>
  );
}

export default Performance;
