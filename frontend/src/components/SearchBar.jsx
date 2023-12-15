import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={"searchBar"}>
      <input
        className={"searchInput"}
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
