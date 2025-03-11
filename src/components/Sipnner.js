import React from "react";
import "./Sipnner.css";
function Sipnner() {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <div class="loader"></div>
      <div className="text-bgDark text-lg font-semibold">Loading..</div>
    </div>
  );
}

export default Sipnner;
