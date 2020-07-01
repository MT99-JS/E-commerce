import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection_preview.scss";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match, linkUrl }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
