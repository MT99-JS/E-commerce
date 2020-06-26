import React from "react";
import Collection_Preview from "../../components/collection/collection_preiew";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionShopPage } from "../../redux/collection_shop_page/collection-selector";

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...otherProps }) => (
      <Collection_Preview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionShopPage,
});

export default connect(mapStateToProps)(CollectionOverview);
