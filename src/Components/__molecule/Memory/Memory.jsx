import React from "react";
import "./Memory.css";
import MemoryImage from "../../__atom/MemoryImage/MemoryImage";
function Memory() {
  return (
    <div className="Memory">
      <MemoryImage />
      <h className="memo_num">
        92 <span className="memo_span"> /100</span>
      </h>
    </div>
  );
}
export default Memory;
