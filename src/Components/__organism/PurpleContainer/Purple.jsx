import React from "react";
import "./Purple.css";
import ScoreCircle from "../../__molecule/ScoreCircle/ScoreCircle";

function Purple() {
  return (
    <div className="purple">
      <h className="result">Your Result</h>
      <ScoreCircle />
      <h className="great">Great</h>
      <p className="answer">
        Your performance exceed 65% <br /> of the people conducting the <br />{" "}
        test here!
      </p>
    </div>
  );
}
export default Purple;
