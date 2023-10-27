import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";
import ProfileOptionsMenu from "./ProfileOptionsMenu";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";

function ProfilePage() {
  const { userData } = useContext(playerContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(userData);
  }, [userData]);
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
          <img
            style={{ width: 250, height: 250 }}
            src={
              data[0]["profilePhotoLink"]
                ? data[0]["profilePhotoLink"]
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
            }
          />
        </Box>
        <Box>
          <TextField
            defaultValue={data[0]["name"]}
            label={"Nombre"}
            fullWidth
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

          <TextField
            defaultValue={data[0]["email"]}
            label={"Email"}
            fullWidth
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
        </Box>

        <div style={{ alignSelf: "flex-start" }}>
          <ProfileOptionsMenu />
        </div>
      </Box>
    </div>
  );
}

export default ProfilePage;
