import React from "react";
import SearchBar from "../SearchBar";
import { styles } from "./styles";
import ProfileMenu from "./ProfileMenu";
import NavigationButtons from "./NavigationButtons";

function TopBar() {
  return (
    <div style={styles.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <NavigationButtons />
        <SearchBar />
      </div>

      <ProfileMenu />
    </div>
  );
}

export default TopBar;
