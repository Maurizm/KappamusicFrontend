import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import songs from "./../../assets/songs.json";
import { COLORS } from "../../colors/colors";

function SearchPage() {
  const { searchTerm } = useParams();
  const [filteredArray, setFilteredArray] = useState([]);

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
      console.log("Searchbox vacio");
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {filteredArray.length == 0 ? (
          <div>No se encontraron resultados.</div>
        ) : (
          filteredArray.map((song) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 300,
                  height: 50,
                  padding: 10,
                  backgroundColor: COLORS.highlightBackgroundColor,
                }}
              >
                <div>{song.artist}</div>
                <div>{song.title}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default SearchPage;
