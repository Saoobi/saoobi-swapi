import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import parseUrlItem from "../ParsingUrl";

function ItemCard({ item, width = "450px", height = "240px" }) {
  //Get id and category from url
  const parsedUrlItem = parseUrlItem(item.url);
  const category = parsedUrlItem.category;
  const id = parsedUrlItem.id;

  //First letter uppercase
  const categoryText =
    parsedUrlItem.category.slice(0, 1).toUpperCase() +
    parsedUrlItem.category.slice(1, parsedUrlItem.category.length);

  return (
    <Link
      className="ItemCard"
      style={{ width: width, height: height }}
      to={`/item/${category}/${id}`}
    >
      <div className="ItemCard__Name">
        <h2>{item.name}</h2>
      </div>
      <div className="ItemCard__Category">
        <h4 className="ItemCard__Category__Text">{categoryText}</h4>
        <img
          alt={category}
          src={require(`../../static/icons/${category}.png`)}
        />
      </div>
    </Link>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ItemCard;
