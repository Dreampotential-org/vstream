import React, { useState, useEffect, Fragment } from 'react';

function Golive() {
    return (
        <div className='row flex-row'>
            <div className='col-xl-12'>
                {/* <!-- Form --> */}
                <div className='widget has-shadow'>
                    <div className='widget-header bordered no-actions d-flex align-items-center'>
                        <h4 style={{ width: '50%' }}>Go LIve</h4>
                    </div>

                    <div className='widget-body'>
                        <form
                            className='needs-validation animated zoomIn'
                        // onSubmit={(e) => login(e)}
                        >
                            <div className='form-group row d-flex align-items-center mb-5'>
                                <label className='col-lg-4 form-control-label d-flex justify-content-lg-end'>
                                    Stream Name *
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
                                    Add Guest *
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
                                <div className='col-lg-5 form-control-label d-flex justify-content-lg-end'>
                                    <button className='btn btn-shadow'>
                                        Invites Only
                                    </button>
                                </div>
                                <div className='col-lg-2'>
                                    <button className='btn btn-shadow'>
                                        Followers
                                    </button>
                                </div>
                                <div className='col-lg-2'>
                                    <button className='btn btn-shadow'>
                                        Public
                                    </button>
                                </div>
                            </div>
                            <div className='form-group row d-flex align-items-center mb-5'>
                                <label className='col-lg-5 form-control-label d-flex justify-content-lg-end'>
                                    Direct Link
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
                                        Lets Go!
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

    )
}
export default Golive;