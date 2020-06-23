import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection_preview.scss";

const Collection_Preiew = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idc) => idc < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection_Preiew;
