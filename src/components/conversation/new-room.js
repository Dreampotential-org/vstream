import React, { useState, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createRoom, getAllUsers } from "../../actions/conversation";
// import Icofont from 'react-icofont';

function AddRoom() {
    return (
        <div className='row flex-row'>
            <div className='col-xl-12'>
                {/* <!-- Form --> */}
                <div className='widget has-shadow'>
                    <div className='widget-header bordered no-actions d-flex align-items-center'>
                        <h4 style={{ width: '50%' }}>Add Room</h4>
                        <div className='text-right' style={{ width: '50%' }}>
                            <button
                                // onClick={(e) => toggleAddVehicleForm(e)}
                                className='btn btn-gradient-01'
                            >
                                {/* {toggleForm ? 'Back To Courses' : 'Add Course'} */}
                                {/* Add Vehicle */}
                            </button>
                        </div>
                    </div>

                    <div className='widget-body'>
                        <form
                            className='needs-validation animated zoomIn'
                        // onSubmit={(e) => login(e)}
                        >
                            <div className='form-group row d-flex align-items-center mb-5'>
                                <label className='col-lg-4 form-control-label d-flex justify-content-lg-end'>
                                    Room Name *
                                </label>
                                <div className='col-lg-5'>
                                    <input
                                        type='text'
                                        name='name'
                                        // value={data.name}
                                        // onChange={(e) => onChangeFields(e)}
                                        className='form-control'
                                        placeholder='Name'
                                        required='required'
                                    />
                                </div>
                            </div>

                            <div className='form-group row d-flex align-items-center mb-5'>
                                <label className='col-lg-4 form-control-label d-flex justify-content-lg-end'>
                                    Invite People *
                                </label>
                                <div className='col-lg-5'>
                                    <input
                                        type='text'
                                        name='name'
                                        // value={data.name}
                                        // onChange={(e) => onChangeFields(e)}
                                        className='form-control'
                                        placeholder='Invite People'
                                        required='required'
                                    />
                                </div>
                            </div>
                            <div className='form-group row d-flex align-items-center mb-5'>
                                <label className='col-lg-4 form-control-label d-flex justify-content-lg-end'>
                                    Room Link
                                </label>
                                <div className='col-lg-5'>
                                    <label className='form-control-label d-flex'>
                                        This is room
                                    </label>
                                </div>
                            </div>
                            <div className='text-right'>
                                <button
                                    className='btn btn-gradient-01'
                                    type='submit'
                                //   style={toggleLoader ? { pointerEvents: 'none' } : null}
                                >
                                    <span
                                    // style={toggleLoader ? { marginRight: '10px' } : null}
                                    >
                                        Create Room
                                </span>
                                    {/* <Icofont icon='spinner' size='3' spin='true' /> */}
                                    {/* {toggleLoader ? (
                                    <Icofont icon='spinner' size='3' spin='true' />
                                ) : null} */}
                                </button>
                                <button className='btn btn-shadow' type='reset'>
                                    Reset
                                </button>
                            </div>
                        </form>
                        {/* {toggleForm ? (
                            <AddCourse changeView={onSubmitToggleChange} />
                        ) : (
                                <ViewCourse />
                                //   <TestingReordering />
                            )} */}
                    </div>
                </div>
                {/* <!-- End Form --> */}
            </div>
        </div>
        // <div>
        //     {/* <!-- Begin Sign In --> */}
        //     < div role='tabpanel'
        //         // className={
        //         //     toggleSignIn
        //         //         ? 'tab-pane show active animated zoomIn'
        //         //         : 'tab-pane'
        //         // }
        //         className='tab-pane'
        //         id='singin'
        //         aria-labelledby='singin-tab'>
        //         <h3>New Room</h3>
        //         <form
        //         // onSubmit={(e) => login(e)}
        //         >
        //             <div className='group material-input'>
        //                 <input
        //                     type='text'
        //                     name='room_name'
        //                     // value={loginData.email}
        //                     // onChange={(e) => saveLoginData(e)}
        //                     required
        //                 />
        //                 <span className='highlight'></span>
        //                 <span className='bar'></span>
        //                 <label>Room Name</label>
        //             </div>
        //             <div className='group material-input'>
        //                 <input
        //                     type='text'
        //                     name='invite_people'
        //                     // value={loginData.password}
        //                     // onChange={(e) => saveLoginData(e)}
        //                     required
        //                 />
        //                 <span className='highlight'></span>
        //                 <span className='bar'></span>
        //                 <label>Invite People</label>
        //             </div>
        //             <div className='row'>

        //             </div>
        //             <div className='sign-btn text-center'>
        //                 <button
        //                     // href='!#'
        //                     // onClick={(e) => login(e)}
        //                     className='btn btn-lg btn-gradient-01'
        //                 // style={toggleLoader ? { pointerEvents: 'none' } : null}
        //                 >
        //                     <span
        //                     // style={toggleLoader ? { marginRight: '10px' } : null}
        //                     >
        //                         Create Room
        //                 </span>
        //                     {/* <Icofont icon='spinner' size='3' spin='true' /> */}
        //                     {/* {toggleLoader ? (
        //                     // <Loader
        //                     //   type='Oval'
        //                     //   color='white'
        //                     //   height={20}
        //                     //   width={20}
        //                     //   // timeout={3000} //3 secs
        //                     //   // visible={toggleLoader ? true : false}
        //                     // />
        //                     <Icofont icon='spinner' size='3' spin='true' />
        //                 ) : null} */}
        //                 </button>
        //             </div>
        //         </form>
        //     </div >
        // </div >

    )
}


// AddRoom.propTypes = {
//     toggling: PropTypes.object.isRequired,
//     users: PropTypes.object.isRequired,
//     changeView: PropTypes.func.isRequired,
//     createRoom: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//     toggling: state.toggling,
//     users: state.users,
// });

// export default connect(mapStateToProps, { getAllUsers, createRoom })(
//     AddRoom
// );
export default AddRoom;