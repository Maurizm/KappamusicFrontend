import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import avatars from "../../../assets/avatars.json";
import { COLORS } from "../../../colors/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: COLORS.highlightBackgroundColor,
  textAlign: "center",
};

function ModalProfilePhoto({ setProfileLink }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onHandleSelectPhoto = (link) => {
    setProfileLink(link);
    handleClose();
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          marginLeft: 6,
          marginTop: 2,
          backgroundColor: COLORS.highlightBackgroundColor,
          "&:active": {
            backgroundColor: COLORS.highlightBackgroundColor,
          },
          "&:hover": {
            backgroundColor: COLORS.backgroundColor,
          },
        }}
        variant="contained"
      >
        Seleccionar Foto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2 }}
          >
            Seleccione una foto:
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {avatars.map((photo) => (
            <Button
              onClick={() => onHandleSelectPhoto(photo.link)}
              key={photo.id}
            >
              <img
                src={photo.link}
                style={{
                  width: 70,
                  height: 70,
                  marginLeft: 20,
                  marginRight: 20,
                  borderRadius: 50,
                }}
              />
            </Button>
          ))}
          <div style={{ textAlign: "center", marginTop: 15 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onHandleSelectPhoto("")}
            >
              ELIMINAR FOTO DE PERFIL
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalProfilePhoto;
