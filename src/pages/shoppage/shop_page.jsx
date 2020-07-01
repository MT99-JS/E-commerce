import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection_overview";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "../collection/collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/collection_shop_page/collection_action";
import WithSpinner from "../../components/withspinner/withspinner";

const WithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview);
const WithSpinnerCollectionsPage = WithSpinner(CollectionPage);

class SHOP_PAGE extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({
          loading: false,
        });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <WithSpinnerCollectionsOverview isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <WithSpinnerCollectionsPage isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(SHOP_PAGE);
