import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { styles } from "./styles";
import { COLORS } from "../../colors/colors";

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
        <div style={styles.artistInfo}>{song ? song.artist : ""}</div>
        {song && song.title.length > 15 ? (
          <marquee style={styles.songInfo} scrollamount="4">
            {song ? song.title : ""}
          </marquee>
        ) : (
          <div style={styles.songInfo}>{song ? song.title : ""}</div>
        )}

        {song && song.album.length > 18 ? (
          <marquee style={styles.albumInfo} scrollamount="4">
            {song ? song.album : ""}
          </marquee>
        ) : (
          <div style={styles.albumInfo}>{song ? song.album : ""}</div>
        )}
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
