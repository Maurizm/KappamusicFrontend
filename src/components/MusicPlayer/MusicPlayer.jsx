import React, { useContext } from "react";
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
  const { currentSong } = useContext(playerContext);
  if (isEmpty(currentSong)) {
    return;
  }
  return (
    <div style={styles.container}>
      <div style={{ marginRight: 10 }}>
        <img
          style={styles.cover}
          src={
            !isEmpty(currentSong)
              ? currentSong.coverLink
              : "https://files.readme.io/f2e91bb-portalDocs-sonosApp-defaultArtAlone.png"
          }
        />
      </div>
      <div style={styles.songInformationContainer}>
        <div style={styles.artistInfo}>
          {!isEmpty(currentSong) ? currentSong.artist : ""}
        </div>
        {!isEmpty(currentSong) && currentSong.title.length > 15 ? (
          <marquee style={styles.songInfo} scrollamount="4">
            {!isEmpty(currentSong) ? currentSong.title : ""}
          </marquee>
        ) : (
          <div style={styles.songInfo}>
            {!isEmpty(currentSong) ? currentSong.title : ""}
          </div>
        )}

        {!isEmpty(currentSong) && currentSong.album.length > 18 ? (
          <marquee style={styles.albumInfo} scrollamount="4">
            {!isEmpty(currentSong) ? currentSong.album : ""}
          </marquee>
        ) : (
          <div style={styles.albumInfo}>
            {!isEmpty(currentSong) ? currentSong.album : ""}
          </div>
        )}
      </div>
      <H5AudioPlayer
        src={!isEmpty(currentSong) ? currentSong.link : ""}
        showSkipControls
        autoPlay
        volume={0.5}
        customAdditionalControls={[
          RHAP_UI.LOOP,
          <div>
            <FavoriteButton song={currentSong} />
          </div>,
          <div>
            <PlaylistButton />
          </div>,
        ]}
      />
    </div>
  );
}

export default MusicPlayer;
