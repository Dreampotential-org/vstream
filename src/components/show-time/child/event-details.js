import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/streaming.css";
import { changeTabStreaming } from "../../../actions/toggling";

function EventDetails({ toggling, changeTabStreaming }) {
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
    </div>
  );
}
EventDetails.propTypes = {
  toggling: PropTypes.object.isRequired,
  changeTabStreaming: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { changeTabStreaming })(EventDetails);
