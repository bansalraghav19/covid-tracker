import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { Wrapper } from "./style";
import { indianStates } from "../../utilities/indianStates";

interface statesDetails {
  stateCode: string;
  stateName: string;
}

const SearchBar = (): JSX.Element => {
  const [showSugesstionBox, setShowSugesstionBox] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState<statesDetails[]>([]);
  const deBouncedValue = useDebounce(searchValue, 500);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // searching a substring(deBouncedValue) in static data array
    const newData: statesDetails[] = indianStates.filter((row) =>
      row?.stateName?.toUpperCase()?.includes(deBouncedValue?.toUpperCase())
    );
    setSearchData(newData);
  }, [deBouncedValue]);

  useEffect(() => {
    // handler to check if user clicks outside the searchbar and suggestion Box container
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSugesstionBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const clearSearchBar = () => {
    if (searchValue?.length) {
      setSearchValue("");
    }
  };

  return (
    <Wrapper>
      <div ref={wrapperRef} className="search-input">
        <input
          type="text"
          placeholder="Type to Search"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target?.value)}
          onFocus={() => setShowSugesstionBox(true)}
        />
        {showSugesstionBox && (
          <div className="suggestion-box">
            {searchData?.length === 0 && <div>No Search Results Found</div>}
            {searchData?.map((row: statesDetails) => (
              <Link key={row?.stateCode} to={`/state/${row?.stateCode}`}>
                <li onClick={() => setShowSugesstionBox(false)}>
                  {row?.stateName}
                </li>
              </Link>
            ))}
          </div>
        )}
        <div className="icon">
          {showSugesstionBox ? (
            <i onClick={clearSearchBar} className="fas fa-times"></i>
          ) : (
            <i className="fas fa-search"></i>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
