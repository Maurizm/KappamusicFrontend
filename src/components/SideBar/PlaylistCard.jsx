import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";

function PlaylistCard({ playlist }) {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding sx={{ padding: 0.8 }}>
      <ListItemButton
        sx={{ borderRadius: 2 }}
        onClick={() => navigate(`/playlist/${playlist.id}`)}
      >
        <ListItemIcon>
          <BiSolidPlaylist fontSize={30} color={COLORS.accentColor} />
        </ListItemIcon>
        <div
          style={{
            maxWidth: 175,
            color: COLORS.accentColor,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {playlist.name}
        </div>
      </ListItemButton>
    </ListItem>
  );
}

export default PlaylistCard;
