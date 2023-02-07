import React from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  let navigate = useNavigate();
  return (
    <div class="search">
      THIS IS SEARCH
      <button
        onClick={() => {
          navigate("/new");
        }}
      >
        Let's go!
      </button>
    </div>
  );
}

export default Search;
