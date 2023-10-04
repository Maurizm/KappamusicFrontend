import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        style={{
          backgroundColor: "gray",
          padding: 10,
          borderRadius: 15,
          width: "700px",
        }}
      />
    </div>
  );
}

export default SearchBar;
