import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Slider from "./slider";
import EventSearch from "./search"

function Spotlight(){
    return(
        <div>
            <Slider></Slider>
            <EventSearch></EventSearch>
        </div>
    )
}

export default Spotlight;