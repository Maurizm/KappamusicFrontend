import React, { useContext, useState, useEffect } from "react";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { CircularProgress, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";
import LoadingComponent from "../../components/LoadingComponent";

function FavoritesPage() {
  const { songsList, setCurrentSong, userData } = useContext(playerContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(userData);
  }, [userData]);

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
        data[0]["favorites"].map((song) => {
          return (
            <ListSongCard
              song={song}
              onClick={() => setCurrentSong(song)}
              key={song.id}
            />
          );
        })
      )}
    </div>
  );
}

export default FavoritesPage;
