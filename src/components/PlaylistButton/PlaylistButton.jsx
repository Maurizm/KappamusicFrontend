import { Button } from "@mui/material";
import React from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { COLORS } from "../../colors/colors";
import PlaylistMenu from "./PlaylistMenu";
function PlaylistButton({ song }) {
  return (
    <div>
      {/* <Button sx={{ minWidth: 40 }}>
        <BiSolidPlaylist size={22} color={COLORS.accentColor} />
      </Button> */}
      <PlaylistMenu song={song} />
    </div>
  );
}

export default PlaylistButton;
