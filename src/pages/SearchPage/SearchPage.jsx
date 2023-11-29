import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import songs from "./../../assets/songs.json";
import { COLORS } from "../../colors/colors";
import ListSongCard from "../../components/ListSongCard/ListSongCard";
import MusicPlayer from "../../components/MusicPlayer";
import { styles } from "./styles";
import playerContext from "../../context/PlayerContext/PlayerContext";

function SearchPage() {
  const { setCurrentSong, songsList, setPlaylistSongs } =
    useContext(playerContext);

  const { searchTerm } = useParams();
  const [filteredArray, setFilteredArray] = useState([]);

  const handleClick = (song) => {
    setPlaylistSongs([]);
    setCurrentSong(song);
  };

  const handleSearch = () => {
    if (searchTerm.length > 0) {
      const filteredSearch = songsList.filter((song) => {
        return (
          song.title.toLowerCase().match(searchTerm) ||
          song.artist.toLowerCase().match(searchTerm) ||
          song.album.toLocaleLowerCase().match(searchTerm)
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
    <div style={styles.container}>
      <div>
        {filteredArray.length == 0 || searchTerm === "emptyString" ? (
          <div>
            No se encontraron resultados o los términos de búsqueda son
            inválidos.
          </div>
        ) : (
          filteredArray.map((song) => {
            return (
              <ListSongCard
                song={song}
                onClick={() => handleClick(song)}
                key={song.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default SearchPage;
