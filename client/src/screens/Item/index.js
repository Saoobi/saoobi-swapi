import React, { useEffect, useState } from "react";

import { getItemCategoryById } from "../../API/";
import { itemComponents } from "./itemComponents";
import BackButton from "../../component/BackButton";
import Loader from "../../component/Loader";

import c3poImage from "../../static/images/c3po.png";

function Item({ match }) {
  const category = match.params.category;
  const id = match.params.id;

  const [item, setItem] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (category && id) {
      setIsSearching(true);
      getItemCategoryById(category, id).then((result) => {
        setIsSearching(false);
        setItem(result);
      });
    } else {
      setItem([]);
    }
  }, [id]);

  //Get Component corresponding to category
  const ComponentName = itemComponents[category];

  //First letter uppercase
  const categoryText =
    category.slice(0, 1).toUpperCase() + category.slice(1, category.length);
  return (
    <div className="Content">
      <BackButton />
      <div className="Item">
        <div className="Item__c3poContainer">
          <div className="Item__c3poContainer__imgContainer">
            <img alt="c3po" src={c3poImage} />
          </div>
          <div className="Item__c3poContainer__titleContainer">
            <h3>
              There is all the informations about "{item.name || item.title}"
            </h3>
          </div>
        </div>
        {isSearching && <Loader />}
        <div className="Item__Data">
          <div className="Item__Data__Category">
            <h3 className="Item__Data__Category__Text">{categoryText}</h3>
            <img
              alt={category}
              src={require(`../../static/icons/${category}.png`)}
            />
          </div>
          <ComponentName item={item} />
        </div>
      </div>
    </div>
  );
}

export default Item;
