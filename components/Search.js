import React from "react";
import { SearchContainer } from "@/styles/home/home.styles";

function Search(props) {
  return (
    <SearchContainer className="search-user">
      <input
        type="text"
        placeholder="Search user..."
        onChange={(e) => props.setSearchInput(e.target.value)}
      />
    </SearchContainer>
  );
}

export default Search;
