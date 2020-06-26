import { createSelector } from "reselect";

const selectCollection = (state) => state.collectionPreview;

export const selectCollectionShopPage = createSelector(
  [selectCollection],
  (collectionPreview) => collectionPreview.collection
);
