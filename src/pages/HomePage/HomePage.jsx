import React, { useContext } from "react";
import "./styles.css";
import MusicPlayer from "../../components/MusicPlayer";
import { useState } from "react";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import TopBar from "../../components/TopBar/TopBar";
import songs from "../../assets/songs.json";
import SideBar from "../../components/SideBar";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";

function HomePage() {
  const { songsList, setCurrentSong, setPlaylistSongs } =
    useContext(playerContext);

  function onHandleClick(music) {
    setPlaylistSongs([]);
    setCurrentSong(music);
  }
  if (songsList.length == 0) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <div style={styles.cardContainer}>
        {songsList.map((song) => (
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

export default HomePage;
