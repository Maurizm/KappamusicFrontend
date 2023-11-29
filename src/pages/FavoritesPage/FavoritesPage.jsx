import React, { useContext, useState, useEffect } from "react";
import playerContext from "../../context/PlayerContext/PlayerContext";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import { Button, CircularProgress, Typography } from "@mui/material";
import { COLORS } from "../../colors/colors";
import LoadingComponent from "../../components/LoadingComponent";
import { FaPlay } from "react-icons/fa6";

function FavoritesPage() {
  const {
    songsList,
    setCurrentSong,
    userData,
    setPlaylistSongs,
    setPlaylistIndex,
  } = useContext(playerContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(userData);
  }, [userData]);

  const handlePlaylistIndex = (index) => {
    setPlaylistIndex(index);
    setPlaylistSongs(data[0]["favorites"]);
    console.log(index, "favorites");
  };

  const handlePlaylistButton = () => {
    setPlaylistSongs([...data[0]["favorites"]]);
    setPlaylistIndex(0);
  };

  if (data.length == 0) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Typography noWrap overflow={"hidden"} variant="h2" marginBottom={3}>
        Favoritos
      </Typography>
      {data[0]["favorites"].length == 0 ? (
        <Typography
          sx={{ textAlign: "center", color: "gray", marginTop: 5 }}
          variant="h6"
        >
          No Tienes Canciones Agregadas a Favoritos.
        </Typography>
      ) : (
        <div>
          <Button
            onClick={() => handlePlaylistButton()}
            sx={{
              backgroundColor: COLORS.highlightBackgroundColor,
              color: COLORS.textColor,
              borderRadius: 20,
              paddingRight: 3,
              paddingLeft: 3,
              marginBottom: 2,
              marginLeft: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaPlay size={18} style={{ marginRight: 10 }} />
              Reproducir Favoritos
            </div>
          </Button>
          {data[0]["favorites"].map((song, index) => {
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
                    onClick={() => handlePlaylistIndex(index)}
                    key={song.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
