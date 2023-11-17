import React, { useContext, useState, useEffect } from "react";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { CircularProgress, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";
import LoadingComponent from "../../components/LoadingComponent";

function FavoritesPage() {
  const { songsList, setCurrentSong, userData, setPlaylistSongs } =
    useContext(playerContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(userData);
  }, [userData]);

  const handleClick = (song) => {
    setPlaylistSongs([]);
    setCurrentSong(song);
  };

  if (data.length == 0) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Typography noWrap overflow={"hidden"} variant="h2" marginBottom={3}>
        Favoritos
      </Typography>
      {data[0]["favorites"].length == 0 ? (
        <Typography
          sx={{ textAlign: "center", color: "gray", marginTop: 5 }}
          variant="h6"
        >
          No Tienes Canciones Agregadas a Favoritos.
        </Typography>
      ) : (
        data[0]["favorites"].map((song, index) => {
          return (
            <div
              key={song.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{ marginRight: 2 }}
                variant="body"
                fontWeight={500}
              >
                {index + 1}
              </Typography>
              <div style={{ width: "100%" }}>
                <ListSongCard
                  song={song}
                  onClick={() => handleClick(song)}
                  key={song.id}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default FavoritesPage;
