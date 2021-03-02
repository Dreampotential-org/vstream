import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRoom, getAllUsers } from "../../actions/conversation";
import Icofont from 'react-icofont';

function AddRoom({
    createRoom,
    getAllUsers,
    changeView,
    users: { allUsers },
}) {
    return (
        <div>
            <h3>New Room</h3>
            <form
            // onSubmit={(e) => login(e)}
            >
                <div className='group material-input'>
                    <input
                        type='text'
                        name='room_name'
                        // value={loginData.email}
                        // onChange={(e) => saveLoginData(e)}
                        required
                    />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Room Name</label>
                </div>
                <div className='group material-input'>
                    <input
                        type='text'
                        name='invite_people'
                        // value={loginData.password}
                        // onChange={(e) => saveLoginData(e)}
                        required
                    />
                    <span className='highlight'></span>
                    <span className='bar'></span>
                    <label>Invite People</label>
                </div>
                <div className='row'>
                    {/* <div className='col text-left'>
                        <div className='styled-checkbox'>
                          <input type='checkbox' name='checkbox' id='remeber' />
                          <label htmlFor='remeber'>Remember me</label>
                        </div>
                      </div> */}
                    {/* <div className='col text-right'>
                        <a href='pages-forgot-password.html'>
                          Forgot Password ?
                        </a>
                      </div> */}
                </div>
                <div className='sign-btn text-center'>
                    <button
                        // href='!#'
                        // onClick={(e) => login(e)}
                        className='btn btn-lg btn-gradient-01'
                    // style={toggleLoader ? { pointerEvents: 'none' } : null}
                    >
                        <span
                            // style={toggleLoader ? { marginRight: '10px' } : null}
                        >
                            Create Room
                        </span>
                        {/* <Icofont icon='spinner' size='3' spin='true' /> */}
                        {/* {toggleLoader ? (
                            // <Loader
                            //   type='Oval'
                            //   color='white'
                            //   height={20}
                            //   width={20}
                            //   // timeout={3000} //3 secs
                            //   // visible={toggleLoader ? true : false}
                            // />
                            <Icofont icon='spinner' size='3' spin='true' />
                        ) : null} */}
                    </button>
                </div>
            </form>
        </div>
    )
}


AddRoom.propTypes = {
    toggling: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    changeView: PropTypes.func.isRequired,
    createRoom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
    users: state.users,
});

export default connect(mapStateToProps, { getAllUsers, createRoom })(
    AddRoom
);