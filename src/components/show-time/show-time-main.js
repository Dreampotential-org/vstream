import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HostNow from "./host-now";
import EventCalender from "./calender";
import NewSchedule from "./new-schedule";

function ShowTime({ toggling: { toggleNavbarBurger, showTimeActiveSubStates }, }) {
    return (
        <div
            className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
        >
            <Fragment>

                {
                    showTimeActiveSubStates["host"] ?
                        <div className='container-fluid'>
                            <HostNow></HostNow>
                        </div>
                        : null

                }
                {
                    showTimeActiveSubStates["calender"] ?
                        <div className='container-fluid'>
                            <EventCalender></EventCalender>
                        </div>
                        : null
                }
                {
                    showTimeActiveSubStates["schedule"] ?
                        <div className='container-fluid'>
                            <NewSchedule></NewSchedule>
                        </div>
                        : null
                }
            </Fragment>
        </div>
    )
}
ShowTime.propTypes = {
    toggling: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, {})(ShowTime);
