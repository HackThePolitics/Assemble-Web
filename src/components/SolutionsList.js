import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import CollectionSet from "./templates/CollectionSet";
import { filterItemsToInclude } from "../utils";

import "./Base.css";

// Blank filter will default to show all
const SolutionsList = ({ headerTitle, solutions, filter = undefined }) => (
  <div className="collection-container">
    <h1>{headerTitle}</h1>
    {solutions && (
      <CollectionSet collection={filterItemsToInclude(solutions, filter)} />
    )}
  </div>
);

export default compose(
  firestoreConnect(["solutions"]),
  connect((state, _) => ({
    solutions: state.firestore.ordered.solutions
  }))
)(SolutionsList);
