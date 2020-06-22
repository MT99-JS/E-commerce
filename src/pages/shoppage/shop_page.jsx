import React, { Component } from "react";
import SHOPDATA from "./shop_data";
import Collection_Preview from "../../components/collection/collection_preiew";
export default class SHOP_PAGE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <Collection_Preview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
