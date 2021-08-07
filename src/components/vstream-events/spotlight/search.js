import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function EventSearch() {
  return (
    <div className="row d-flex justify-content-between form-group mt-1">
      <div className="col-6 text-center">
        <input
          type="text"
          value="Search a topic, event, channel etc"
          className="mySearchTextField form-control"
        />
      </div>
      <div className="col-3 text-center">
        <select
          name="country"
          className="custom-select form-control mySearchTextField"
        >
          <option value="">Filter</option>
          <option value="AF">Pakistan</option>
          <option value="AX">US</option>
        </select>
      </div>
      <div className="col-3 text-center">
        <select
          name="country"
          className="custom-select form-control mySearchTextField"
        >
          <option value="">Sort</option>
          <option value="AF">Pakistan</option>
          <option value="AX">US</option>
        </select>
      </div>
    </div>
  );
}

export default EventSearch;
