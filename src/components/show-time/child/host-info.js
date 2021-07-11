import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/streaming.css";
import { changeTabStreaming } from "../../../actions/toggling";

function AboutHost({ toggling, changeTabStreaming }) {
  return (
    <div>
      <div className="widget-header d-flex align-items-center">
        <div className="user-image">
          <span className="dot"></span>
        </div>
        <div className="d-flex flex-column mr-auto">
          <div className="title">
            <h1 className="username">Joe Holland</h1>
          </div>
        </div>
        <div className="widget-options">
          <li className="next d-inline-block">
            <button
              //   onClick={(e) => changeFormStep("step3")}
              className="btn btn-lg btn-gradient-01"
            >
              <span>Subscribe</span>
            </button>
          </li>
        </div>
      </div>

      <div className="widget-body">
        <p>
          Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros,
          imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligula eget
          sapien suscipit luctus non a risus.
        </p>
        <p>
          Integer lobortis justo erat, ac faucibus risus laoreet semper. Aenean
          et sollicitudin ante, vel finibus velit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          Integer lobortis justo erat, ac faucibus risus laoreet semper. Aenean
          et sollicitudin ante, vel finibus velit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <div className="widget-footer d-flex align-items-center">
        <div className="col-xl-8 col-md-8 col-7 no-padding d-flex justify-content-start">
          <div className="users-like">
            <a href="javascript:void(0);">
              <img
                src="assets/img/avatar/avatar-01.jpg"
                className="img-fluid rounded-circle"
                alt="..."
              />
            </a>
            <a href="javascript:void(0);">
              <img
                src="assets/img/avatar/avatar-02.jpg"
                className="img-fluid rounded-circle"
                alt="..."
              />
            </a>
            <a href="javascript:void(0);">
              <img
                src="assets/img/avatar/avatar-03.jpg"
                className="img-fluid rounded-circle"
                alt="..."
              />
            </a>
            <a href="javascript:void(0);">
              <img
                src="assets/img/avatar/avatar-09.jpg"
                className="img-fluid rounded-circle"
                alt="..."
              />
            </a>
            <a className="view-more" href="javascript:void(0);">
              +4
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-5 no-padding d-flex justify-content-end">
          <div className="meta">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <i className="la la-comment"></i>
                  <span className="numb">12</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="la la-heart-o"></i>
                  <span className="numb">30</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
AboutHost.propTypes = {
  toggling: PropTypes.object.isRequired,
  changeTabStreaming: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { changeTabStreaming })(AboutHost);
