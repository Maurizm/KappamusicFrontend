import React from "react";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "20%",
        backgroundColor: COLORS.highlightBackgroundColor,
      }}
    >
      <div onClick={() => navigate("/")}>Inicio</div>
    </div>
  );
}

export default SideBar;
