import React from "react";
import SearchForm from "./SearchForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { locationObjectParser } from "../../utils/utils";
import { getLocation } from "../../redux/locatorSlice";

function Search() {
  let locationObject;
  let navigate = useNavigate();
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
