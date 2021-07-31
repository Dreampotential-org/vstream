import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../navbar";
import Slider from "./slider";

function Spotlight(){
    return(
        <div>
            <Slider></Slider>
        </div>
    )
}

export default Spotlight;