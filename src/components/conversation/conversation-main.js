import React from 'react'; // useState
import { toggleNavbar } from '../../actions/toggling';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Conversation({
    toggling: { toggleNavbarBurger },
    toggleNavbar,
    logout,
    auth: { userDetail },
}) {
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
                                    className='list-group-item'
                                    // onClick={(e) => addToggleLesson(e)}
                                    // style={
                                    //     toggleAddLessonInput || lessonLoader
                                    //         ? { pointerEvents: 'none', cursor: 'normal' }
                                    //         : null
                                    // }
                                    >
                                    <i className='icofont-plus'></i> Create Room
                                </li>
                                <li
                                    className='list-group-item'
                                    // onClick={(e) => addToggleLesson(e)}
                                    // style={
                                    //     toggleAddLessonInput || lessonLoader
                                    //         ? { pointerEvents: 'none', cursor: 'normal' }
                                    //         : null
                                    // }
                                    >
                                    <i className='icofont-plus'></i> Schedule Events
                                </li>
                                <li
                                    className='list-group-item'
                                    // onClick={(e) => addToggleLesson(e)}
                                    // style={
                                    //     toggleAddLessonInput || lessonLoader
                                    //         ? { pointerEvents: 'none', cursor: 'normal' }
                                    //         : null
                                    // }
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
                </div>
            </div>
        </div>
    )
}
Conversation.propTypes = {
    toggling: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    toggleNavbar: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
    auth: state.auth,
});

export default connect(mapStateToProps, { toggleNavbar, logout })(Conversation);