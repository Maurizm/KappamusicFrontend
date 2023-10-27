import { CircularProgress } from "@mui/material";
import React from "react";
import { COLORS } from "../../colors/colors";

function LoadingComponent({ fullscreen }) {
  return (
    <CircularProgress
      sx={{
        position: "fixed",
        top: "50vh",
        left: fullscreen ? "50%" : "60%",
        color: COLORS.accentColor,
      }}
    />
  );
}

export default LoadingComponent;
