import React from "react";
import "./Reaction.css";
import ReactionImage from "../../__atom/ReactionImage/ReactionImage";

function Reaction() {
  return (
    <div className="reaction">
      <ReactionImage />
      <h className="reac_OutOf">
        80 <span className="react_span">/100</span>
      </h>
    </div>
  );
}
export default Reaction;
