import React from "react";
import SearchForm from "./SearchForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import locationObjectParser from "../../utils/locationObjectParser";
import { getLocation } from "../../actions";

function Search() {
  let navigate = useNavigate();
  let locationObject;
  const dispatch = useDispatch();
  const handleOnSearchChange = (searchInput) => {
    locationObject = locationObjectParser(searchInput);
  };
  return (
    <div className="search">
      <SearchForm onSearchChange={handleOnSearchChange} />
      <button
        type="submit"
        className="btn btn-sm btn-primary"
        onClick={() => {
          dispatch(getLocation(locationObject));
          navigate("/new");
        }}
      >
        Let's go!
      </button>
    </div>
  );
}

export default Search;
