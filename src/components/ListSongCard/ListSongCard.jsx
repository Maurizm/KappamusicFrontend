import React from "react";
import { styles } from "./styles";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Divider, Paper, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ListSongMenu from "./ListSongMenu";

function ListSongCard({ song, onClick, isInPlaylist = false, playlistId }) {
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
          <img src={song.coverLink} style={styles.image} onClick={onClick} />
          <div style={{ paddingLeft: 10 }}>
            <Typography color={COLORS.textColor}>{song.title}</Typography>
            <Typography color={COLORS.textColor}>{song.artist}</Typography>
            <Typography style={styles.albumInfo}>{song.album}</Typography>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <FavoriteButton song={song} />
          {isInPlaylist ? (
            <ListSongMenu
              song={song}
              isInPlaylist={true}
              playlistId={playlistId}
            />
          ) : (
            <ListSongMenu song={song} />
          )}
        </div>
      </Paper>
      <Divider color={COLORS.accentColor} sx={{ height: 2 }} />
    </div>
  );
}

export default ListSongCard;
