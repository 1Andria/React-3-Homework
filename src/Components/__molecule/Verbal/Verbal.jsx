import React from "react";
import "./Verbal.css";
import VerbalImage from "../../__atom/VerbalImage/VerbalImage";
function Verbal() {
  return (
    <div className="verbal_div">
      <VerbalImage />
      <h className="verb_outof">
        61 <span className="verb_span"> /100</span>
      </h>
    </div>
  );
}
export default Verbal;
