import React from "react";
import CollectionOverview from "../../components/collection-overview/collection_overview";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "../collection/collection";

const SHOP_PAGE = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Switch>
    </div>
  );
};

export default SHOP_PAGE;
