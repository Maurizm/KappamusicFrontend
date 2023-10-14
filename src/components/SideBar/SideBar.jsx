import React from "react";
import { COLORS } from "../../colors/colors";

function SideBar() {
  return (
    <div
      style={{
        height: "100vh",
        width: "20%",
        backgroundColor: COLORS.highlightBackgroundColor,
      }}
    >
      <div>HOME</div>
    </div>
  );
}

export default SideBar;
