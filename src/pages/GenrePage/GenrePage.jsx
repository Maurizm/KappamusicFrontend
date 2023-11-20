import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import { Typography } from "@mui/material";

function GenrePage() {
  const { songsList, setPlaylistSongs, setCurrentSong } =
    useContext(playerContext);
  const [genreSongs, setGenreSongs] = useState([]);
  const { genreName } = useParams();
  const location = useLocation();

  function onHandleClick(song) {
    setPlaylistSongs([]);
    setCurrentSong(song);
  }

  useEffect(() => {
    setGenreSongs(
      songsList.filter((song) => {
        return song.gender == genreName;
      })
    );
  }, [songsList]);

  if (songsList.length == 0) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Typography noWrap overflow={"hidden"} variant="h2" marginBottom={2}>
        {location.state.displayName}
      </Typography>
      <div style={styles.cardContainer}>
        {genreSongs.map((song) => (
          <SongCard
            song={song}
            onClick={() => onHandleClick(song)}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default GenrePage;
