import React from "react";
import SearchForm from "./SearchForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { parseLocationObject } from "../../utils/utils";
import { getLocation } from "../../redux/locatorSlice";

function Search() {
  let locationObject;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnSearchChange = (searchInput) => {
    locationObject = parseLocationObject(searchInput);
  };
  return (
    <div className="search card">
      <div class="card-body">
        <SearchForm onSearchChange={handleOnSearchChange} />
        <button
          type="submit"
          className="btn btn-sm btn-primary mt-2"
          onClick={() => {
            dispatch(getLocation(locationObject));
            navigate("/new");
          }}
        >
          Let's go!
        </button>
      </div>
    </div>
  );
}

export default Search;
