import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CategoriesSlider from "../../home/category-slider";
import EventSearch from "../common/search";
import EventList from "../common/events-list";


function Discover() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-10">
          <CategoriesSlider></CategoriesSlider>
          <EventSearch></EventSearch>
          <EventList></EventList>
        </div>
      </div>
    </div>
  );
}

export default Discover;
