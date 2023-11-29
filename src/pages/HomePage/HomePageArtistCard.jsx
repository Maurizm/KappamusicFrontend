import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../../colors/colors";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { useNavigate } from "react-router-dom";

function HomePageArtistCard({ artist }) {
  const { userData, songsList } = useContext(playerContext);
  //const [artistsSongs, setArtistsSongs] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setArtistsSongs(
  //     songsList.filter((song) => {
  //       return song.artist == artist.name;
  //     })
  //   );
  // }, []);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        maxHeight: 250,
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
        navigate(`/genre/${artist.name}`, {
          state: { displayName: artist.displayName },
        })
      }
    >
      <img
        src={artist.background}
        style={{
          maxWidth: "100%",
          //maxHeight: "120%",
          opacity: 0.5,
          objectFit: "cover",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          textShadow: "2px 2px 4px #000000",
        }}
        variant="h4"
      >
        {artist.displayName}
      </Typography>
    </Box>
  );
}

export default HomePageArtistCard;
