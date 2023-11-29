import React, { useContext } from "react";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { FaSquarePlus } from "react-icons/fa6";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { createEmptyPlaylist } from "../../firebase/hooks/createEmptyPlaylist";
import { enqueueSnackbar } from "notistack";

function AddPlaylistCard() {
  const { userData } = useContext(playerContext);
  const handleCreatePlaylist = async () => {
    if (userData[0]["playlists"].length <= 4) {
      await createEmptyPlaylist(userData[0]["playlists"].length);
    } else {
      enqueueSnackbar("Solo puedes tener un máximo de 5 Playlists.", {
        variant: "error",
      });
    }
  };
  return (
    <ListItem disablePadding sx={{ padding: 0.8 }}>
      <ListItemButton
        sx={{ borderRadius: 2 }}
        onClick={() => handleCreatePlaylist()}
      >
        <ListItemIcon>
          <FaSquarePlus size={30} color={COLORS.accentColor} />
        </ListItemIcon>
        Crear Playlist
      </ListItemButton>
    </ListItem>
  );
}

export default AddPlaylistCard;
