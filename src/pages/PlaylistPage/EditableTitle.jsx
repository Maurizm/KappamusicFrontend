import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { updatePlaylistName } from "../../firebase/hooks/updatePlaylistName";
import PlaylistOptions from "./PlaylistOptions";

function EditableTitle({ playlistData }) {
  const { userData } = useContext(playerContext);
  const [playlistName, setPlaylistName] = useState(playlistData.name);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const isAllWhiteSpace = (name) => {
    return /^\s+$/.test(name);
  };
  useEffect(() => {
    setPlaylistName(playlistData.name);
  }, [playlistData]);

  //Verifica que el nuevo nombre no sea igual que el anterior, lleno de espacios o vacio
  useEffect(() => {
    if (
      playlistName == playlistData.name ||
      isAllWhiteSpace(playlistName) ||
      playlistName.length == 0
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [playlistName]);

  const handleSaveName = async () => {
    await updatePlaylistName(playlistName, userData, playlistData.id);
    setIsNameFocused(false);
  };

  const handleBlur = () => {
    setIsNameFocused(false);
    setPlaylistName(playlistData.name);
  };

  const handleEnterKey = async (e) => {
    if (e.key === "Enter") {
      if (isButtonDisabled) {
        setIsNameFocused(false);
      } else {
        await updatePlaylistName(playlistName, userData, playlistData.id);
        setIsNameFocused(false);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {!isNameFocused ? (
        <Typography
          maxWidth={1000}
          noWrap
          overflow={"hidden"}
          variant={playlistData.name.length > 20 ? "h3" : "h2"}
          marginBottom={3}
          fontWeight={"300"}
        >
          {playlistName}
        </Typography>
      ) : (
        <TextField
          inputProps={{
            maxLength: 50,
            style: { color: COLORS.textColor, fontSize: 50 },
          }}
          InputProps={{ style: { borderRadius: 20, marginBottom: 20 } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: COLORS.accentColor,
              },
            },
          }}
          focused={isNameFocused}
          value={playlistName}
          onChange={(event) => setPlaylistName(event.target.value)}
          onBlur={() => handleBlur()}
          onKeyDown={handleEnterKey}
        />
      )}
      {/* {!isNameFocused ? (
        <Button
          sx={{
            color: COLORS.accentColor,
          }}
          onClick={() => setIsNameFocused(true)}
          disabled={isNameFocused}
        >
          <MdModeEdit size={30} />
        </Button>
      ) : (
        <Button
          sx={{ color: COLORS.accentColor }}
          onMouseDown={handleSaveName}
          disabled={isButtonDisabled}
        >
          GUARDAR
        </Button>
      )} */}
      <div style={{ whiteSpace: "nowrap", display: "flex" }}>
        <Button
          variant="contained"
          sx={{
            opacity: isNameFocused ? 100 : 0,
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
          onMouseDown={handleSaveName} //SI O SI onMouseDown si el Textfield tiene onBlur
          disabled={isButtonDisabled}
        >
          GUARDAR
        </Button>
        {/* <Button
          sx={{
            color: COLORS.accentColor,
            opacity: isNameFocused ? 0 : 100,
          }}
          onClick={() => setIsNameFocused(true)}
          disabled={isNameFocused}
        >
          <MdModeEdit size={30} />
        </Button> */}
        <PlaylistOptions
          setIsNameFocused={setIsNameFocused}
          playlistId={playlistData.id}
        />
      </div>
    </div>
  );
}

export default EditableTitle;
