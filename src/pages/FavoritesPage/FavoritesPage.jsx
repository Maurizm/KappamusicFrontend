import React, { useContext } from "react";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { Typography } from "@mui/material";

function FavoritesPage() {
  const { songsList, setCurrentSong } = useContext(playerContext);
  return (
    <div>
      <Typography noWrap overflow={"hidden"} variant="h2">
        Favoritos
      </Typography>
      {songsList.map((song) => {
        return song.isFavorite ? (
          <ListSongCard song={song} onClick={() => setCurrentSong(song)} />
        ) : null;
      })}
    </div>
  );
}

export default FavoritesPage;
