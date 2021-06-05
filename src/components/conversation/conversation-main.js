import React, { Fragment, useEffect, useState } from 'react'; // useState
import { toggleNavbar } from '../../actions/toggling';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import '../../assets/css/DetailCourse.css';
import AddRoom from "./new-room";
import ScheduleEvents from "./schedule-events";
import Golive from "./go-live";
import { changeComponents } from "../../actions/conversation";

function Conversation({
    changeComponents,
    conversation: { roomComponent, scheduleComponent, liveComponent },
    // scheduleComponent: { scheduleComponent },
    // liveComponent: { liveComponent },
    toggling: { toggleNavbarBurger },

    // toggleNavbar,
    // logout,
    // auth: { userDetail },
}) {
    // const [showAddRoom, setShowAddRoom] = useState(false);
    // const [showSchedule, setShowSchedule] = useState(false);
    // const [showGoLive, setShowGoLive] = useState(false);
    // const addToggleLesson = (e) => {
    //     e.preventDefault();

    //     setToggleAddLessonInput(true);
    // };

    const showComponents = (e) => {
        changeComponents(e.target.id);
        // if (e.target.id == "addRoom") {
        //     setShowAddRoom(true);
        //     setShowSchedule(false);
        //     setShowGoLive(false);
        // } else if (e.target.id == "schedule") {
        //     setShowSchedule(true);
        //     setShowGoLive(false);
        //     setShowAddRoom(false);
        // } else if (e.target.id == "live") {
        //     setShowGoLive(true);
        //     setShowAddRoom(false);
        //     setShowSchedule(false);
        // }
    }

    return (
        <div className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='page-header'>
                        <div className='d-flex align-items-center'>
                            <h2 className='page-header-title'>Start Conversation</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='lessons-sidebar'>
                            <ul className='list-group rounded-0'>
                                <li
                                    className={roomComponent ? 'list-group-item active'
                                        : 'list-group-item'}
                                    id="addRoom"
                                    onClick={(e) => showComponents(e)}
                                    style={
                                        roomComponent ? { pointerEvents: 'none', cursor: 'normal' }
                                            : null
                                    }
                                >
                                    <i className='icofont-plus'></i> Create Room
                                </li>
                                <li
                                    className={scheduleComponent ? 'list-group-item active'
                                        : 'list-group-item'}
                                    onClick={(e) => showComponents(e)}
                                    id="schedule"
                                    style={
                                        scheduleComponent ? { pointerEvents: 'none', cursor: 'normal' }
                                            : null
                                    }
                                >
                                    <i className='icofont-plus'></i> Schedule Events
                                </li>
                                <li
                                    className={liveComponent ? 'list-group-item active'
                                        : 'list-group-item'}
                                    id="live"
                                    onClick={(e) => showComponents(e)}
                                    style={
                                        liveComponent ? { pointerEvents: 'none', cursor: 'normal' }
                                            : null
                                    }
                                >
                                    <i className='icofont-plus'></i> Go Live
                                </li>
                                {/* {loadingReorderingLessons ? (
                                    <div className='overlay'>
                                        <Icofont icon='spinner' size='3' spin='true' />
                                    </div>
                                ) : null} */}
                            </ul>
                        </div>
                    </div>
                    <div
                        className='col-md-9  bg-white shadow p-5'
                        style={{
                            maxHeight: 'calc(100vh - 230px)',
                            minHeight: 'calc(100vh - 230px)',
                            overflowY: 'auto',
                        }}
                    >
                        {roomComponent ?
                            <AddRoom></AddRoom> : null
                        }
                        {scheduleComponent ?
                            <ScheduleEvents></ScheduleEvents> : null
                        }
                        {liveComponent ?
                            <Golive></Golive> : null
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
Conversation.propTypes = {
    toggling: PropTypes.object.isRequired,
    // logout: PropTypes.func.isRequired,
    // toggleNavbar: PropTypes.func.isRequired,
    conversation: PropTypes.object.isRequired,
    changeComponents: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
    // auth: state.auth,
    conversation: state.conversation,
});

export default connect(mapStateToProps,
    { changeComponents }
)(Conversation);