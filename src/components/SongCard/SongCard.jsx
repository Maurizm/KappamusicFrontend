import React from "react";
import { styles } from "./styles";
import { Button } from "@mui/material";
import { COLORS } from "../../colors/colors";

function SongCard({ song, onClick }) {
  return (
    <div style={styles.container}>
      <div style={styles.infoContainer}>
        <div style={styles.text}>{song.artist}</div>
        <div style={styles.text}>{song.title}</div>
      </div>
      <Button sx={{ padding: 0, color: COLORS.accentColor }}>
        <div style={styles.coverContainer} onClick={onClick}>
          <img src={song.cover} style={styles.cover} />
        </div>
      </Button>
    </div>
  );
}

export default SongCard;
