import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { styles } from "./styles";

function MusicPlayer({ song }) {
  return (
    <div style={styles.container}>
      <div style={{ marginRight: 10 }}>
        <img
          style={styles.cover}
          src={
            song
              ? song.cover
              : "https://files.readme.io/f2e91bb-portalDocs-sonosApp-defaultArtAlone.png"
          }
        />
      </div>
      <div style={styles.songInformationContainer}>
        <div>{song ? song.artist : ""}</div>
        <div style={styles.songName}>{song ? song.title : ""}</div>
      </div>
      <H5AudioPlayer
        src={song ? song.link : ""}
        showSkipControls
        autoPlay
        volume={0.5}
      />
    </div>
  );
}

export default MusicPlayer;
