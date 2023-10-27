import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { COLORS } from "../../colors/colors";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const stringValue = e.target.value
      .trim()
      .toLowerCase()
      .replace(/[^A-zÀ-ú0-9-\s]/gi, "");
    e.preventDefault();
    setSearchInput(stringValue);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchInput}`);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar canción"
        style={styles.searchField}
        maxLength={100}
        onChange={handleChange}
        onKeyDown={handleEnterKey}
        color="green"
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
