import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import EditableTitle from "./EditableTitle";
import { COLORS } from "../../colors/colors";
import { FaPlay } from "react-icons/fa6";

function PlaylistPage() {
  const { userData, playlistIndex, setPlaylistIndex, setPlaylistSongs } =
    useContext(playerContext);
  const { playlistId } = useParams();

  let playlistData =
    userData.length == 0
      ? []
      : userData[0].playlists.find((playlist) => playlist.id == playlistId);

  const handlePlayPlaylist = () => {
    setPlaylistSongs([...playlistData.playlistSet]);
    setPlaylistIndex(0);
    console.log(playlistIndex, "playlistPageButton");
  };

  const handlePlaylistIndex = (index) => {
    setPlaylistIndex(index);
    setPlaylistSongs(playlistData.playlistSet);
    console.log(index, "playlistPage");
  };

  if (userData.length === 0) {
    return <LoadingComponent />;
  }

  if (playlistData == undefined) {
    return <div>NO EXISTE LA PLAYLIST</div>;
  }
  return (
    <div>
      <EditableTitle playlistData={playlistData} />
      <Button
        onClick={() => handlePlayPlaylist()}
        sx={{
          backgroundColor: COLORS.highlightBackgroundColor,
          color: COLORS.textColor,
          borderRadius: 20,
          paddingRight: 3,
          paddingLeft: 3,
          marginBottom: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaPlay size={18} style={{ marginRight: 10 }} />
          Reproducir Playlist
        </div>
      </Button>
      {playlistData.playlistSet.length == 0 ? (
        <Typography
          sx={{ textAlign: "center", color: "gray", marginTop: 5 }}
          variant="h6"
        >
          No Tienes Canciones Agregadas a Esta Playlist.
        </Typography>
      ) : (
        playlistData.playlistSet.map((song, index) => {
          return (
            <div
              key={song.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{ marginRight: 2 }}
                variant="body"
                fontWeight={500}
              >
                {index + 1}
              </Typography>
              <div style={{ width: "100%" }}>
                <ListSongCard
                  song={song}
                  isInPlaylist={true}
                  playlistId={playlistId}
                  onClick={() => handlePlaylistIndex(index)}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PlaylistPage;
