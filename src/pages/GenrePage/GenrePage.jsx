import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import { Typography } from "@mui/material";
import Background from "../../assets/Background.png";

function GenrePage() {
  const dict = {
    Rock: "Rock",
    Regueton: "Reguetón",
    Pop: "Pop",
    House: "House",
    Esrock: "Rock en Español",
    cumbia: "Cumbia",
    eurobeat: "Eurobeat",
    salsa: "Salsa",
    kpop: "K-Pop",
  };
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
        return song.gender == genreName || song.artist == genreName;
      })
    );
  }, [songsList]);

  if (songsList.length == 0 || location.state.displayName == null) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <img
        src={Background}
        style={{
          maxWidth: "79%",
          height: "auto",
          opacity: 0.03,
          position: "fixed",
        }}
      />
      <div>
        <Typography noWrap overflow={"hidden"} variant="h2" marginBottom={2}>
          {dict[genreName] ? dict[genreName] : genreName}
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
    </div>
  );
}

export default GenrePage;
