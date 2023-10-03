import React, { useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { COLORS } from "../colors/colors";
import { useEffect } from "react";

function MusicPlayer({ song }) {
  useEffect(() => {
    console.log(song);
  }, [song]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <div style={{ marginRight: 10 }}>
        <img
          src={
            song
              ? song.cover
              : "https://files.readme.io/f2e91bb-portalDocs-sonosApp-defaultArtAlone.png"
          }
          style={{ height: 80, aspectRatio: 1, paddingLeft: 5 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //alignItems: "center",
          width: "10%",
          maxWidth: "10%",
        }}
      >
        <div>{song ? song.artist : ""}</div>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "175px",
          }}
        >
          {song ? song.title : ""}
        </div>
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
