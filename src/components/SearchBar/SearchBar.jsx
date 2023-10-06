import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { styles } from "./styles";
import songs from "./../../assets/songs.json";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    const stringValue = e.target.value
      .trim()
      .toLowerCase()
      .replace(/[^A-zÀ-ú\s]/gi, "");
    e.preventDefault();
    setSearchInput(stringValue);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchInput);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar..."
        style={styles.searchField}
        maxLength={100}
        onChange={handleChange}
      />

      <Link
        to={`/search/${searchInput.length > 0 ? searchInput : "emptyString"}`}
      >
        <LuSearch style={styles.searchIcon} />
      </Link>
    </div>
  );
}

export default SearchBar;
