import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { useNavigate } from "react-router-dom";

function HomePageGenreCard({ genre }) {
  const { userData, songsList } = useContext(playerContext);
  const [genreSongs, setGenreSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setGenreSongs(
      songsList.filter((song) => {
        return song.gender == genre.name;
      })
    );
  }, []);

  return (
    <Box
      sx={{
        width: 250,
        height: 150,
        margin: 1,
        //textAlign: "center",
        backgroundColor: COLORS.highlightBackgroundColor,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() =>
        navigate(`/genre/${genre.name}`, {
          state: { displayName: genre.displayName },
        })
      }
    >
      <img
        src={genre.background}
        style={{
          maxWidth: "120%",
          maxHeight: "120%",
          opacity: 0.5,
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          textShadow: "2px 2px 4px #000000",
        }}
        variant="h5"
      >
        {genre.displayName}
      </Typography>
    </Box>
  );
}

export default HomePageGenreCard;
