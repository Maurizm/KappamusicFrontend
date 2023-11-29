import React, { useContext } from "react";
import "./styles.css";
import MusicPlayer from "../../components/MusicPlayer";
import { useState } from "react";
import { styles } from "./styles";
import SongCard from "../../components/SongCard/SongCard";
import TopBar from "../../components/TopBar/TopBar";
import songs from "../../assets/songs.json";
import SideBar from "../../components/SideBar";
import playerContext from "../../context/PlayerContext/PlayerContext";
import LoadingComponent from "../../components/LoadingComponent";
import HomePageGenreCard from "./HomePageGenreCard";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/Logo.png";
import Background from "../../assets/Background.png";
import HomePageArtistCard from "./HomePageArtistCard";

function HomePage() {
  const { songsList, setCurrentSong, setPlaylistSongs } =
    useContext(playerContext);

  const artists = [
    {
      id: 1,
      name: "Daft Punk",
      background:
        "https://i.discogs.com/sP_wDoC5MsG9lZUfb9thLbpmMmL__nuVnGMNpwgjirE/rs:fit/g:sm/q:90/h:438/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYxNTQ4NDUyOS00/Mjg0LmpwZWc.jpeg",
      displayName: "Daft Punk",
    },
    {
      id: 2,
      name: "Bad Bunny",
      background:
        "https://i.discogs.com/682ZK_vDa4vkXg9nEMgy-XnvPViQNhRj0FLnYaiA10A/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTU4OTQ5/MDUtMTY1MjA3MjIy/MS04NzUwLmpwZWc.jpeg",
      displayName: "Bad Bunny",
    },
    {
      id: 3,
      name: "The Beatles",
      background:
        "https://i.discogs.com/YrZb0tNZaSP8pDrCOMa6ukA54CzlW-m4pL9ARW6R-zU/rs:fit/g:sm/q:90/h:374/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTgyNzMw/LTE2NTA4MTg4NTkt/OTkwMi5qcGVn.jpeg",
      displayName: "The Beatles",
    },
  ];
  const genres = [
    {
      id: 1,
      name: "Rock",
      background:
        "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rock",
    },
    {
      id: 2,
      name: "Regueton",
      background:
        "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Reguetón",
    },
    {
      id: 3,
      name: "Pop",
      background:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Pop",
    },
    {
      id: 4,
      name: "Rap",
      background:
        "https://images.pexels.com/photos/1238980/pexels-photo-1238980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rap",
    },
    {
      id: 5,
      name: "House",
      background:
        "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "House",
    },
    {
      id: 6,
      name: "Esrock",
      background:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Rock en Español",
    },
    {
      id: 7,
      name: "cumbia",
      background:
        "https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Cumbia",
    },
    {
      id: 8,
      name: "eurobeat",
      background:
        "https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      displayName: "Eurobeat",
    },
    {
      id: 9,
      name: "salsa",
      background:
        "https://media.istockphoto.com/id/1166581988/es/foto/instrumento-de-bater%C3%ADa-conga-con-fondo-de-color.jpg?b=1&s=612x612&w=0&k=20&c=7n85DV1IbMH4L3EpgwYIPsbMOrVEWeHzZ2zU63-amsg=",
      displayName: "Salsa",
    },
    {
      id: 10,
      name: "kpop",
      background:
        "https://media.istockphoto.com/id/1480936900/es/foto/pr%C3%A1ctica-grupal-adolescente-de-danza-en-estudio.jpg?b=1&s=612x612&w=0&k=20&c=nD77KMkSJCXqDb_HvnQYuk-FevyNLUzikY-4nbI_f1E=",
      displayName: "K-Pop",
    },
  ];

  function onHandleClick(music) {
    setPlaylistSongs([]);
    setCurrentSong(music);
  }
  if (songsList.length == 0) {
    return <LoadingComponent />;
  }
  return (
    <div style={{ position: "relative" }}>
      <div>
        <img
          src={Background}
          style={{
            maxWidth: "79%",
            height: "auto",
            opacity: 0.04,
            position: "fixed",
          }}
        />
      </div>
      <div>
        <Box
          sx={{
            maxWidth: "100%",
            height: 350,
            //backgroundColor: "red",
            borderRadius: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img src={Logo} style={{ width: 300, height: 150 }} />
        </Box>
        {/* ARTISTAS DESTACADOS */}
        <Typography variant="h5" marginBottom={1} fontWeight={500}>
          ARTISTAS DESTACADOS
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          {artists.map((artist) => {
            return <HomePageArtistCard artist={artist} key={artist.id} />;
          })}
        </div>
        <Typography variant="h5" marginBottom={1} fontWeight={500}>
          GÉNEROS MUSICALES
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {genres.map((genre) => {
            return <HomePageGenreCard genre={genre} key={genre.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
