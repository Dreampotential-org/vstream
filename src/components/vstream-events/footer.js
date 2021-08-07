import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function VstreamEventFooter() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Terms Of Use
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
            <p className="text-gradient-02">vStream @ 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default VstreamEventFooter;
