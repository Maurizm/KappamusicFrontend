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

export default function ProfileMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { userData, setCurrentSong } = useContext(playerContext);
  const [data, setData] = useState([]);
  const [profileLink, setProfileLink] = useState("");

  useEffect(() => {
    setData(userData);
    if (userData.length > 0) {
      setProfileLink(userData[0]["profilePhotoLink"]);
    }
  }, [userData]);

  const handleSingOut = async () => {
    setCurrentSong({});
    await signOut(auth).then(navigate("/"));
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (data.length == 0) {
    return;
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Opciones de Perfil">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 35, height: 35 }}>
              {profileLink.length == 0 ? (
                <BsPersonCircle size={35} color={COLORS.accentColor} />
              ) : (
                <img src={profileLink} style={{ height: 35, width: 35 }} />
              )}
            </Avatar>
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
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              //bgcolor: "background.paper",
              bgcolor: COLORS.highlightBackgroundColor,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/profile")}>
          <Avatar /> Perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleSingOut()}>
          <ListItemIcon>
            <BiLogOut color={COLORS.accentColor} size={22} />
          </ListItemIcon>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </>
  );
}
