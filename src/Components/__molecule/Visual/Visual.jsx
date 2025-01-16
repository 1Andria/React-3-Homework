import React from "react";
import "./Visual.css";
import VisualImage from "../../__atom/VisualImage/VisualImage";

function Visual() {
  return (
    <div className="visual_div">
      <VisualImage />
      <h className="visualtxt">
        73 <span className="vis_span"> /100</span>
      </h>
    </div>
  );
}
export default Visual;
