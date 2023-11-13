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
import {
  MdPlaylistAdd,
  MdPlaylistPlay,
  MdPlaylistRemove,
} from "react-icons/md";
import { createEmptyPlaylist } from "../../firebase/hooks/createEmptyPlaylist";
import { NestedMenuItem } from "mui-nested-menu";
import { enqueueSnackbar } from "notistack";
import { SlOptionsVertical } from "react-icons/sl";
import { removeFromPlaylist } from "../../firebase/hooks/removeFromPlaylist";
import { addToPlaylist } from "../../firebase/hooks/addToPlaylist";
import { deletePlaylist } from "../../firebase/hooks/deletePlaylist";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function PlaylistOptions({
  song,
  playlistId,
  setIsNameFocused,
}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { userData } = useContext(playerContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //const [playlistLength, setPlaylistLength] = useState(0);

  // useEffect(() => {
  //   if (userData.length > 0) {
  //     setPlaylistLength(userData[0]["playlists"].length);
  //   }
  // }, [userData]);

  const handleAddToPlaylist = async (id) => {
    try {
      await addToPlaylist(song, userData, id);
      enqueueSnackbar("Canción añadida a la playlist con éxito", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(
        "La canción ya está en la playlist. Por favor, elige otra canción.",
        { variant: "warning" }
      );
    }
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleDeletePlaylist = async () => {
    await deletePlaylist(userData, playlistId).then(navigate("/"));
    enqueueSnackbar("Playlist Eliminada", { variant: "warning" });
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
            <SlOptionsVertical size={22} color={COLORS.accentColor} />
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
          },
        }}
        //transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <MdPlaylistPlay size={22} color={COLORS.accentColor} />
          </ListItemIcon>
          Añadir Canción a Playlist
        </MenuItem> */}
        <MenuItem onClick={() => setIsNameFocused(true)}>
          <ListItemIcon>
            <MdPlaylistPlay size={22} color={COLORS.accentColor} />
          </ListItemIcon>
          Editar Nombre de la Playlist
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleDialogOpen();
          }}
          sx={{ color: "red" }}
        >
          <ListItemIcon>
            <MdPlaylistRemove size={22} color={"red"} />
          </ListItemIcon>
          Eliminar Playlist
        </MenuItem>
      </Menu>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            background: COLORS.highlightBackgroundColor,
            color: COLORS.textColor,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Estás seguro de que quieres esta playlist?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: COLORS.textColor }}
          >
            Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            sx={{ color: COLORS.accentColor }}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => handleDeletePlaylist()}
            autoFocus
            color="error"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
