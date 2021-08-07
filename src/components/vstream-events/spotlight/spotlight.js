import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/attend-events/spotlight.css";
import Slider from "./slider";
import EventSearch from "./search";
import EventList from "./events-list";

function Spotlight() {
  return (
    <div>
      <Slider></Slider>
      <div className="row justify-content-center">
        <div className="col-10">
          <EventSearch></EventSearch>
          <EventList></EventList>
          
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
