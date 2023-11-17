import React, { useContext, useEffect, useState } from "react";
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { styles } from "./styles";
import { COLORS } from "../../colors/colors";
import { isEmpty } from "./hooks/isEmpty";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { BsStarFill, BsStar } from "react-icons/bs";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import PlaylistButton from "../PlaylistButton";

function MusicPlayer() {
  const { currentSong, playlistSongs, playlistIndex } =
    useContext(playerContext);

  const [currentTrack, setTrackIndex] = useState(0);
  const [playlistCurrentSong, setPlaylistCurrentSong] = useState({});
  const [inPlaylist, setInPlaylist] = useState(false);

  useEffect(() => {
    if (playlistSongs.length !== 0) {
      setPlaylistCurrentSong(playlistSongs[currentTrack]);
    }
  }, [currentTrack]);

  useEffect(() => {
    setPlaylistCurrentSong(playlistSongs[0]);
    if (playlistSongs.length !== 0) {
      setInPlaylist(true);
    } else {
      setInPlaylist(false);
    }
    console.log(playlistSongs);
  }, [playlistSongs]);

  useEffect(() => {
    if (playlistIndex != -1) {
      setTrackIndex(playlistIndex);
    }
  }, [playlistIndex]);

  const handleClickNext = () => {
    console.log("click next");
    if (playlistSongs.length !== 0) {
      setTrackIndex((currentTrack) =>
        currentTrack < playlistSongs.length - 1
          ? currentTrack + 1
          : playlistSongs.length - 1
      );
    }
  };

  const handleClickPrevious = () => {
    console.log("click prev");
    if (playlistSongs.length !== 0) {
      setTrackIndex((currentTrack) =>
        currentTrack === 0 ? 0 : currentTrack - 1
      );
    }
  };

  const handleEnd = () => {
    console.log("end");
    if (playlistSongs.length !== 0) {
      setTrackIndex((currentTrack) =>
        currentTrack < playlistSongs.length - 1
          ? currentTrack + 1
          : playlistSongs.length - 1
      );
    }
  };

  if (isEmpty(currentSong) && !inPlaylist) {
    return;
  }
  return (
    <div style={styles.container}>
      <div style={{ marginRight: 10 }}>
        <img
          style={styles.cover}
          src={
            inPlaylist ? playlistCurrentSong.coverLink : currentSong.coverLink
          }
        />
      </div>
      <div style={styles.songInformationContainer}>
        <div style={styles.artistInfo}>
          {inPlaylist ? playlistCurrentSong.artist : currentSong.artist}
        </div>
        {(inPlaylist ? playlistCurrentSong : currentSong).title.length > 15 ? (
          <marquee style={styles.songInfo} scrollamount="4">
            {inPlaylist ? playlistCurrentSong.title : currentSong.title}
          </marquee>
        ) : (
          <div style={styles.songInfo}>
            {inPlaylist ? playlistCurrentSong.title : currentSong.title}
          </div>
        )}

        {(inPlaylist ? playlistCurrentSong : currentSong).album.length > 18 ? (
          <marquee style={styles.albumInfo} scrollamount="4">
            {inPlaylist ? playlistCurrentSong.album : currentSong.album}
          </marquee>
        ) : (
          <div style={styles.albumInfo}>
            {inPlaylist ? playlistCurrentSong.album : currentSong.album}
          </div>
        )}
      </div>
      <H5AudioPlayer
        src={inPlaylist ? playlistCurrentSong.link : currentSong.link}
        showSkipControls={playlistSongs.length == 0 ? false : true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnd}
        autoPlay
        volume={0.5}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <div>
            <FavoriteButton
              song={inPlaylist ? playlistCurrentSong : currentSong}
            />
          </div>,
          <div>
            <PlaylistButton
              song={inPlaylist ? playlistCurrentSong : currentSong}
            />
          </div>,
        ]}
      />
    </div>
  );
}

export default MusicPlayer;
