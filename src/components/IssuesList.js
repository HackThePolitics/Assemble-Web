import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import CollectionSet from "./templates/CollectionSet";
import { filterItemsToInclude } from "../utils";

import "./Base.css";

// Blank filter will default to show all
const IssuesList = ({ headerTitle, problems, filter = undefined }) => (
  <div className="collection-container">
    <h1>{headerTitle}</h1>
    {problems && (
      <CollectionSet collection={filterItemsToInclude(problems, filter)} />
    )}
  </div>
);

export default compose(
  firestoreConnect(["problems"]),
  connect((state, _) => ({
    problems: state.firestore.ordered.problems
  }))
)(IssuesList);
