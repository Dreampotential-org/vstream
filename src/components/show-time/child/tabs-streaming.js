import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../../assets/css/streaming.css';
import { changeTabStreaming } from "../../../actions/toggling";

function TabsStreaming(
    { toggling, changeTabStreaming }
) {
    return (
        <div className="sliding-tabs" style={{ width: "100%" }}>
            <ul className="nav nav-tabs " id="aboutHost" role="tablist">
                <li className="nav-item streamingTab" id="aboutHost" onClick={(e) => changeTabStreaming(e.target.id)}>
                    <a className={toggling.activeStreamingTab['aboutHost'] ? "nav-link active" : "nav-link"}
                        id="aboutHost" data-toggle="tab"
                        role="tab" aria-controls="tab-1" aria-selected="false">About The Host</a>
                </li>
                <li className="nav-item streamingTab" id="eventDetails" onClick={(e) => changeTabStreaming(e.target.id)}>
                    <a className={toggling.activeStreamingTab['eventDetails'] ? "nav-link active" : "nav-link"}
                        id="eventDetails" data-toggle="tab"
                        role="tab" aria-controls="tab-2" aria-selected="false">Event Details</a>
                </li>
                <li className="nav-item streamingTab" id="announcement" onClick={(e) => changeTabStreaming(e.target.id)}>
                    <a className={toggling.activeStreamingTab['announcement'] ? "nav-link active" : "nav-link"}
                        id="announcement" data-toggle="tab"
                        role="tab" aria-controls="tab-3" aria-selected="false">Announcements</a>
                </li>
            </ul>
        </div>
    )
}
TabsStreaming.propTypes = {
    toggling: PropTypes.object.isRequired,
    changeTabStreaming: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, { changeTabStreaming })(TabsStreaming);
