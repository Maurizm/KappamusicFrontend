import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import ListSongCard from "../../components/ListSongCard/ListSongCard";

function PlaylistPage() {
  const { userData, setCurrentSong, playlistSongs, setPlaylistSongs } =
    useContext(playerContext);
  const { playlistId } = useParams();

  let playlistData =
    userData.length == 0
      ? []
      : userData[0].playlists.find((playlist) => playlist.id == playlistId);

  const handlePlayPlaylist = () => {
    // if (playlistSongs !== playlistData.playlistSet) {
    //   setCurrentSong({});
    //   setPlaylistSongs(playlistData.playlistSet);
    // }
    setPlaylistSongs(playlistData.playlistSet);
  };

  if (userData.length === 0) {
    return <LoadingComponent />;
  }

  if (playlistData == undefined) {
    return <div>NO EXISTE LA PLAYLIST</div>;
  }
  return (
    <div>
      <Typography variant="h3">{playlistData.name}</Typography>
      <Button onClick={() => handlePlayPlaylist()}>Reproducir Playlist</Button>
      {playlistData.playlistSet.map((song, index) => {
        return (
          <div key={song.id} style={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ marginRight: 2 }} variant="body" fontWeight={500}>
              {index + 1}
            </Typography>
            <div style={{ width: "100%" }}>
              <ListSongCard
                song={song}
                isInPlaylist={true}
                playlistId={playlistId}
                onClick={() => {}}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlaylistPage;
