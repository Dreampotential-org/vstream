import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/streaming.css";
import { changeTabStreaming } from "../../../actions/toggling";

function EventDetails({ toggling, changeTabStreaming, show_time }) {
  return (
    <div>
      <div className="widget-header d-flex align-items-center">
        <div className="d-flex flex-column mr-auto">
          <div className="title">
            <h1>Best Songs of 2020 - Joe Holland</h1>
          </div>
        </div>
      </div>

      <div className="widget-body">
        <div className="form-group row">
          <div className="col-3 form-control-label d-flex align-items-center">
            Category
          </div>
          <div className="col-8 form-control-plaintext">
            <ul className="quizzes-list">
              <Fragment>
                {show_time.categoryTags.map((data, index) => (
                  // <div
                  //   className='test'
                  //   style={{ position: 'relative' }}
                  // >
                  <span
                    //   href=''
                    //   target='_blank'
                    //   rel='noopener noreferrer'
                    key={index}
                    style={{ position: "relative" }}
                    className="test"
                  >
                    <li className="quiz-list">
                      {data.text}

                      {/* {data.question} */}
                    </li>
                  </span>
                ))}
              </Fragment>
            </ul>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-3 form-control-label d-flex align-items-center">
            Schedule
          </div>
          <div className="col-8 form-control-plaintext">UX Designer</div>
        </div>
        <div className="form-group row mb-1">
          <div className="col-3 form-control-label d-flex align-items-center">
            Agenda
          </div>
          <div className="col-8 form-control-plaintext">123 Century Blvd</div>
        </div>
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
      </div>
    </div>
  );
}
EventDetails.propTypes = {
  toggling: PropTypes.object.isRequired,
  show_time: PropTypes.object.isRequired,
  changeTabStreaming: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  show_time: state.show_time,
});

export default connect(mapStateToProps, { changeTabStreaming })(EventDetails);
