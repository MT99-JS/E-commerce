import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const Menu = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitile">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(Menu);
