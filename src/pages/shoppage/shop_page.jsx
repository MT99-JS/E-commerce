import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection_overview";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "../collection/collection";

const SHOP_PAGE = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default SHOP_PAGE;
