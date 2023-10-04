import React from "react";
import SearchBar from "../../../components/SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { COLORS } from "../../../colors/colors";
function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <SearchBar />
      <BsPersonCircle
        style={{
          color: COLORS.accentColor,
          fontSize: 35,
          padding: 10,
        }}
      />
    </div>
  );
}

export default TopBar;
