import React from "react";
import SearchBar from "../SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { COLORS } from "../../colors/colors";
import { styles } from "./styles";
function TopBar() {
  return (
    <div style={styles.container}>
      <SearchBar />
      <BsPersonCircle style={styles.icon} />
    </div>
  );
}

export default TopBar;
