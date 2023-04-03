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
    <div className="search  d-flex justify-content-center align-items-center">
      <div className="card search-card search-card-custom-bg border-light px-4 pt-4">
        <div className="search-card_body d-flex flex-column">
          <SearchForm onSearchChange={handleOnSearchChange} />
          <button
            type="submit"
            className="reset-btn search-btn mt-2 ms-auto "
            onClick={() => {
              dispatch(getLocation(locationObject));
              navigate("/new");
            }}
          >
            <span className="search-btn">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
