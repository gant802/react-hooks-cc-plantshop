import React from "react";

function Search({setSearch, searchInput}) {

  function handleSearchChange(e) {
 return setSearch(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
}

export default Search;
