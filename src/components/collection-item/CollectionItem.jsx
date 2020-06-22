import React from "react";
import "./collection-item.scss";

const CollectionItem = ({ title, name, price, id, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="title">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
