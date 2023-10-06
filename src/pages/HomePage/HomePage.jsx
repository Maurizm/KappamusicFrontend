import React from "react";
import "./styles.css";
import MusicPlayer from "../../components/MusicPlayer";
import { useState } from "react";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import TopBar from "./TopBar/TopBar";
import songs from "../../assets/songs.json";

function HomePage() {
  const [playerKey, setPlayerKey] = useState(0);
  const [music, setMusic] = useState(null);
  function onHandleClick(music) {
    setMusic(music);
    setPlayerKey((key) => key + 1);
  }

  return (
    <div>
      <div style={styles.cardContainer}>
        {songs.map((song) => (
          <SongCard song={song} onClick={() => onHandleClick(song)} />
        ))}
      </div>
      <div style={styles.musicPlayerContainer}>
        <MusicPlayer song={music} key={playerKey} />
      </div>
    </div>
  );
}

export default HomePage;
