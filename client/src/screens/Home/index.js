import React, { useEffect, useState } from "react";

import { searchItems } from "../../API/";
import Input from "../../component/Input";
import ItemList from "../../component/ItemList";
import Loader from "../../component/Loader";
import useDebounce from "../../Debounce";

import c3poImage from "../../static/images/c3po.png";
import { FaSearch } from "react-icons/fa";
import StarWarsImage from "../../static/images/starwars.png";

function Home({ match }) {
  const [searchValue, setSearch] = useState(
    match.params.search ? match.params.search : ""
  );
  const [resultSearch, setResultSearch] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //Call the debounce to get the latest value after 500ms
  const debouncedSearchValue = useDebounce(searchValue, 500);

  //Call the API everytime debouncedSearchValue changes
  useEffect(() => {
    if (debouncedSearchValue) {
      setIsSearching(true);
      searchItems(debouncedSearchValue).then((results) => {
        setIsSearching(false);
        setResultSearch(results);
      });
    } else {
      setResultSearch([]);
    }
  }, [debouncedSearchValue]);

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  const inputProps = {
    icon: <FaSearch color="white" />,
    onChange: handleInputChange,
    placeholder: "Movie, Character, Planets, Starships, Vehicles and Species",
    value: searchValue,
  };

  return (
    <div className="Home">
      <div className="Home__StarWarsContainer">
        <img alt="StarWars Logo" src={StarWarsImage} />
      </div>
      <div className="Home__c3poContainer">
        <div className="Home__c3poContainer__imgContainer">
          <img alt="c3po" src={c3poImage} />
        </div>
        <div className="Home__c3poContainer__titleContainer">
          <h3>What are you looking for ?</h3>
        </div>
      </div>

      <Input {...inputProps} />

      {isSearching && <Loader />}

      <ItemList items={resultSearch} />
    </div>
  );
}

export default Home;
