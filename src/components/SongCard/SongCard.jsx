import React from "react";
import { styles } from "./styles";

function SongCard({ song, onClick }) {
  return (
    <div style={styles.container}>
      <div style={styles.infoContainer}>
        <div style={styles.text}>{song.artist}</div>
        <div style={styles.text}>{song.title}</div>
      </div>
      <div style={styles.coverContainer} onClick={onClick}>
        <img src={song.cover} style={styles.cover} />
      </div>
    </div>
  );
}

export default SongCard;
