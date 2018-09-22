import React from "react";

const DocSummary = ({ id, description, location: { _lat, _long } = {} }) => (
  <div>
    <div>ID: {id}</div>
    <div>Description: {description}</div>
    {_lat && <div>Location: {`Lat:${_lat}. Long: ${_long}`}</div>}
  </div>
);

export default DocSummary;
