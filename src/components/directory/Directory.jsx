import "./directory.scss";

import Menu from "../menu/menu-item";

import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = ({ directory }) => (
  <div className="directory-menu">
    {
      //this.state.sections.map(({ title, imageUrl, id, size }) => (
      // <Menu title={title} key={id} imageUrl={imageUrl} size={size} />)) below code is equivalent
    }
    {directory.sections.map(({ id, ...otherProps }) => (
      <Menu key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
