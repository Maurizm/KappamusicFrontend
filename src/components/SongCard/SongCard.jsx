import React from "react";
import { styles } from "./styles";

function SongCard({ song, onClick }) {
  return (
    <div style={styles.container} onClick={onClick}>
      <img src={song.cover} style={styles.cover} />
    </div>
  );
}

export default SongCard;
