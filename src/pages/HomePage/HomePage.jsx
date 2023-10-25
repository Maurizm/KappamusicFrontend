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

function HomePage() {
  const { songsList, setCurrentSong } = useContext(playerContext);
  const [playerKey, setPlayerKey] = useState(0);
  const [music, setMusic] = useState(null);
  function onHandleClick(music) {
    //setMusic(music);
    //setPlayerKey((key) => key + 1);
    setCurrentSong(music);
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
      {/* <div style={styles.musicPlayerContainer}>
        <MusicPlayer song={music} key={playerKey} />
      </div> */}
    </div>
  );
}

export default HomePage;
