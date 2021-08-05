import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/attend-events/search.css"

function EventSearch() {
  return (
    <div class="form-group row mt-3 mr-auto ml-auto">
      <div class="col-6 mb-3">
        <input type="text" value="Search a topic, event, channel etc" class="mySearchTextField form-control" />
      </div>
      <div class="col-3">
        <select name="country" class="custom-select form-control">
          <option value="">Filter</option>
          <option value="AF">Pakistan</option>
          <option value="AX">US</option>
        </select>
      </div>
      <div class="col-3">
        <select name="country" class="custom-select form-control">
          <option value="">Sort</option>
          <option value="AF">Pakistan</option>
          <option value="AX">US</option>
        </select>
      </div>
    </div>
  );
}

export default EventSearch;
