import React from "react";
import { styles } from "./styles";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Divider, Paper, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";

function ListSongCard({ song, onClick }) {
  return (
    // <div style={styles.container}>
    //   <img src={song.cover} style={styles.image} onClick={onClick} />
    //   <div style={styles.description}>
    //     <div>{song.title}</div>
    //     <div>{song.artist}</div>
    //     <div style={styles.albumInfo}>{song.album}</div>
    //   </div>
    // </div>
    <div>
      <Paper
        sx={{
          display: "flex",
          borderBottomColor: COLORS.accentColor,
          borderBottomWidth: 1,
          marginBottom: 0,
          padding: 1,
          paddingRight: 2,
          backgroundColor: COLORS.highlightBackgroundColor,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        elevation={0}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={song.cover} style={styles.image} onClick={onClick} />
          <div style={{ paddingLeft: 10 }}>
            <Typography color={COLORS.textColor}>{song.title}</Typography>
            <Typography color={COLORS.textColor}>{song.artist}</Typography>
            <Typography style={styles.albumInfo}>{song.album}</Typography>
          </div>
        </div>
        <div>
          {song.isFavorite ? (
            <BsStarFill color={COLORS.accentColor} />
          ) : (
            <BsStar color={COLORS.accentColor} />
          )}
        </div>
      </Paper>
      <Divider color={COLORS.accentColor} sx={{ height: 2 }} />
    </div>
  );
}

export default ListSongCard;
