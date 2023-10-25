import React from "react";
import SearchBar from "../SearchBar";
import { styles } from "./styles";
import ProfileMenu from "./ProfileMenu";

function TopBar() {
  return (
    <div style={styles.container}>
      <SearchBar />
      <ProfileMenu />
    </div>
  );
}

export default TopBar;
