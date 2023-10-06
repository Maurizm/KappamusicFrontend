import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import songs from "./../../assets/songs.json";
import { COLORS } from "../../colors/colors";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import MusicPlayer from "../../components/MusicPlayer";

function SearchPage() {
  const [currentSong, setCurrentSong] = useState(null);
  const [playerKey, setPlayerKey] = useState(0);

  const { searchTerm } = useParams();
  const [filteredArray, setFilteredArray] = useState([]);

  const handleClick = (song) => {
    setCurrentSong(song);
    setPlayerKey((key) => key + 1);
  };

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      const filteredSearch = songs.filter((song) => {
        return (
          song.title.toLowerCase().match(searchTerm) ||
          song.artist.toLowerCase().match(searchTerm)
        );
      });
      setFilteredArray(filteredSearch);
    } else {
      setFilteredArray([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <div>
        {filteredArray.length == 0 || searchTerm === "emptyString" ? (
          <div>
            No se encontraron resultados o los términos de búsqueda son
            inválidos.
          </div>
        ) : (
          filteredArray.map((song) => {
            return (
              <ListSongCard song={song} onClick={() => handleClick(song)} />
            );
          })
        )}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <MusicPlayer song={currentSong} key={playerKey} />
      </div>
    </div>
  );
}

export default SearchPage;
