import { Button } from "@mui/material";
import React from "react";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigation = useNavigate();
  return (
    <div
      style={{
        marginRight: 20,
        backgroundColor: COLORS.highlightBackgroundColor,
        height: "87%",
        borderRadius: 50,
      }}
    >
      <div style={{ whiteSpace: "nowrap" }}>
        <Button
          size="small"
          sx={{
            borderRadius: 50,
            color: COLORS.textColor,
            "&:hover": {
              borderRadius: 50,
            },
          }}
          onClick={() => navigation(-1)}
        >
          <BiSolidLeftArrowCircle size={30} color={COLORS.accentColor} />
        </Button>
        <Button
          size="small"
          sx={{
            borderRadius: 50,
            overflow: "clip",
            color: COLORS.textColor,
            "&:hover": {
              borderRadius: 50,
            },
          }}
          onClick={() => navigation(+1)}
        >
          <BiSolidRightArrowCircle size={30} color={COLORS.accentColor} />
        </Button>
      </div>
    </div>
  );
}

export default NavigationButtons;
