import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdPlaylistAdd, MdPlaylistPlay } from "react-icons/md";
import { createEmptyPlaylist } from "../../firebase/hooks/createEmptyPlaylist";
import { NestedMenuItem } from "mui-nested-menu";
import { enqueueSnackbar } from "notistack";
import { addToPlaylist } from "../../firebase/hooks/addToPlaylist";

export default function PlaylistMenu(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { userData, setCurrentSong, currentSong } = useContext(playerContext);
  //const [playlistLength, setPlaylistLength] = useState(0);

  // useEffect(() => {
  //   if (userData.length > 0) {
  //     setPlaylistLength(userData[0]["playlists"].length);
  //   }
  // }, [userData]);

  const handleAddToPlaylist = async (data, id) => {
    try {
      await addToPlaylist(props.song, data, id);
      enqueueSnackbar("Canción añadida a la playlist con éxito", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(
        "La canción ya está en la playlist. Por favor, elige otra canción.",
        { variant: "warning" }
      );
    }

    console.log(data);
  };

  const handleCreatePlaylist = async () => {
    if (userData[0]["playlists"].length <= 4) {
      await createEmptyPlaylist(userData[0]["playlists"].length);
    } else {
      enqueueSnackbar("Solo puedes tener un máximo de 5 Playlists.", {
        variant: "error",
      });
    }
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (userData.length == 0) {
    return;
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Opciones de Playlist">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{}}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <BiSolidPlaylist size={22} color={COLORS.accentColor} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            //Eliminar backgroundColor y color para default
            backgroundColor: COLORS.highlightBackgroundColor,
            color: COLORS.accentColor,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            // "& .MuiAvatar-root": {
            //   width: 32,
            //   height: 32,
            //   ml: -0.5,
            //   mr: 1,
            // },
            // "&:before": {
            //   content: '""',
            //   display: "block",
            //   position: "absolute",
            //   top: 0,
            //   right: 14,
            //   width: 10,
            //   height: 10,
            //   //bgcolor: "background.paper",
            //   bgcolor: COLORS.highlightBackgroundColor,
            //   transform: "translateY(-50%) rotate(45deg)",
            //   zIndex: 0,
            // },
          },
        }}
        //transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => handleCreatePlaylist()}>
          <ListItemIcon>
            <MdPlaylistAdd size={22} color={COLORS.accentColor} />
          </ListItemIcon>
          Crear Playlist
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <MdPlaylistPlay size={22} color={COLORS.accentColor} />
          </ListItemIcon>
          Añadir Canción a Playlist
        </MenuItem> */}
        <NestedMenuItem
          leftIcon={<MdPlaylistPlay size={22} style={{ marginRight: 6 }} />}
          label="Añadir a Playlist"
          parentMenuOpen={open}
          sx={{
            paddingLeft: 2,
          }}
          MenuProps={{
            sx: {
              ".MuiMenu-paper": {
                backgroundColor: COLORS.highlightBackgroundColor,
                color: COLORS.accentColor,
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              },
            },
          }}
        >
          {userData[0]["playlists"].map((playlist) => {
            return (
              <MenuItem
                key={playlist.id}
                onClick={() => handleAddToPlaylist(userData, playlist.id)}
              >
                <ListItemIcon>
                  <MdPlaylistPlay size={22} color={COLORS.accentColor} />
                </ListItemIcon>
                {playlist.name}
              </MenuItem>
            );
          })}
        </NestedMenuItem>
      </Menu>
    </>
  );
}
