import React from "react";
import { COLORS } from "../../colors/colors";

function ListSongCard({ song, onClick }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: COLORS.highlightBackgroundColor,
        width: 300,
        height: 50,
        padding: 10,
        borderBottom: "solid",
        borderColor: COLORS.accentColor,
      }}
    >
      <img
        src={song.cover}
        style={{ width: 50, height: 50 }}
        onClick={onClick}
      />
      <div style={{ marginLeft: 10 }}>
        <div>{song.title}</div>
        <div>{song.artist}</div>
      </div>
    </div>
  );
}

export default ListSongCard;
