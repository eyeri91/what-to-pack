import React from "react";
import SearchForm from "./SearchForm";

function Search() {
  const handleOnSearchChange = (searchInput) => {
    console.log(searchInput);
  };
  return (
    <div className="search">
      <SearchForm onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default Search;
