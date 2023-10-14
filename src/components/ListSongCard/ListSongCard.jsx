import React from "react";
import { styles } from "./styles";

function ListSongCard({ song, onClick }) {
  return (
    <div style={styles.container}>
      <img src={song.cover} style={styles.image} onClick={onClick} />
      <div style={styles.description}>
        <div>{song.title}</div>
        <div>{song.artist}</div>
        <div style={styles.albumInfo}>{song.album}</div>
      </div>
    </div>
  );
}

export default ListSongCard;
