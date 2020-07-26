import React from "react";
import PropTypes from "prop-types";

import ItemCard from "../ItemCard";

function ItemList({ items }) {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <ItemCard key={item.url} item={item} />
      ))}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
