import React, { useEffect, useState, useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ModalProfilePhoto from "./ModalProfilePhoto/ModalProfilePhoto";
import { updateProfileData } from "../../firebase/hooks/updateProfileData";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../firebase/hooks/getUserData";
import LoadingComponent from "../../components/LoadingComponent";

function EditProfilePage() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(playerContext);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [profileLink, setProfileLink] = useState("");
  //const [isloading, setIsLoading] = useState(false);

  const isAllWhiteSpace = (name) => {
    return /^\s+$/.test(name);
  };
  const onHandleSubmit = async () => {
    await updateProfileData(name, profileLink);
    //await getUserData(setUserData);
    navigate(-1);
  };

  useEffect(() => {
    setData(userData);
    if (userData.length > 0) {
      setProfileLink(userData[0]["profilePhotoLink"]);
      setName(userData[0]["name"]);
    }
  }, [userData]);

  useEffect(() => {
    if (data.length == 0) {
      return;
    }
    if (
      (name == data[0]["name"] &&
        profileLink == userData[0]["profilePhotoLink"]) ||
      isAllWhiteSpace(name) ||
      name.length == 0
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [name, profileLink]);

  if (data.length == 0) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Typography variant="h3" fontWeight={"400"} marginBottom={5}>
        Perfil de Usuario
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <Box
            sx={{
              height: 250,
              width: 250,
              backgroundColor: COLORS.highlightBackgroundColor,
              marginRight: 10,
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            {data.lenght == 0 ? (
              <div>Loading</div>
            ) : (
              <img
                style={{ width: 250, height: 250 }}
                src={
                  profileLink
                    ? profileLink
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
                }
              />
            )}
          </Box>
          <ModalProfilePhoto setProfileLink={setProfileLink} />
        </Box>

        <Box>
          <TextField
            defaultValue={name}
            label={"Nombre"}
            fullWidth
            onChange={(e) => setName(e.target.value)}
            //con i minuscula
            inputProps={{
              maxLength: 50,
            }}
            variant="outlined"
            sx={{
              input: { color: COLORS.textColor },
              backgroundColor: COLORS.highlightBackgroundColor,
              "& label.Mui-focused": {
                color: COLORS.accentColor,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: COLORS.accentColor,
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: COLORS.accentColor,
              },
            }}
          />

          <TextField
            defaultValue={data[0]["email"]}
            label={"Email"}
            fullWidth
            //con I mayuscula
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
            sx={{
              input: { color: COLORS.textColor },
              backgroundColor: COLORS.highlightBackgroundColor,
              "& label.Mui-focused": {
                color: COLORS.accentColor,
              },
              "& .MuiFilledInput-underline:after": {
                borderBottomColor: COLORS.accentColor,
              },
            }}
            InputLabelProps={{
              sx: {
                color: COLORS.accentColor,
              },
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 40,
            }}
          >
            <Button
              onClick={() => navigate("/profile")}
              sx={{
                color: COLORS.accentColor,
              }}
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              onClick={() => onHandleSubmit()}
              disabled={isButtonDisabled}
              sx={{
                backgroundColor: COLORS.highlightBackgroundColor,
                "&:disabled": {
                  color: COLORS.highlightBackgroundColor,
                },
                "&:active": {
                  backgroundColor: COLORS.highlightBackgroundColor,
                },
                "&:hover": {
                  backgroundColor: COLORS.backgroundColor,
                },
              }}
            >
              GUARDAR
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default EditProfilePage;
