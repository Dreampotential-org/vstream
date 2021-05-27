import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFormStep } from "../../actions/toggling";


function NewSchedule({ toggling: { toggleNavbarBurger, formStepState }, changeFormStep }) {
    return (
        // <div
        //     className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
        // >
        //     <Fragment>
        //         <div className='container-fluid'>
        <div className="row flex-row">
            <div className="col-xl-12">
                <div className="widget has-shadow">
                    <div className="widget-header bordered no-actions d-flex align-items-center">
                        <h4>Schedule Event!</h4>
                    </div>
                    <div className="widget-body">
                        <div className="row flex-row justify-content-center">
                            <div className="col-xl-10">
                                <div id="rootwizard">
                                    <div className="step-container">
                                        <div className="step-wizard">
                                            <div className="progress">
                                                {
                                                    formStepState["step1"] ?
                                                        <div className="progressbar" style={{ width: "33.3333%" }}></div>
                                                        : formStepState["step2"] ?
                                                            <div className="progressbar" style={{ width: "66.6667%" }}></div>
                                                            : formStepState["step3"] ?
                                                                <div className="progressbar" style={{ width: "100%" }}></div>
                                                                : <div className="progressbar"></div>

                                                }

                                            </div>
                                            <ul>
                                                <li id="step1"
                                                    onClick={(e) => changeFormStep(e.target.id)}
                                                >
                                                    <a data-toggle="tab" id="step1"
                                                        className={formStepState["step1"] ? "active show" : ""}
                                                    >
                                                        <span id="step1" className="step">1</span>
                                                        <span id="step1" className="title">Step 1</span>
                                                    </a>
                                                </li>
                                                <li id="step2"
                                                    onClick={(e) => changeFormStep(e.target.id)}>
                                                    <a data-toggle="tab" id="step2"
                                                        className={formStepState["step2"] ? "active show" : ""}>
                                                        <span id="step2" className="step">2</span>
                                                        <span id="step2" className="title">Step 2</span>
                                                    </a>
                                                </li>
                                                <li id="step3"
                                                    onClick={(e) => changeFormStep(e.target.id)}>
                                                    <a data-toggle="tab" id="step3"
                                                        className={formStepState["step3"] ? "active show" : ""}>
                                                        <span id="step3" className="step">3</span>
                                                        <span id="step3" className="title">Step 3</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content">

                                        <div style={{ display: formStepState["step1"] ? "block" : "none" }}
                                            className="tab-pane" id="tab1">
                                            <div className="section-title mt-2 mb-3">
                                                <h4>Event Informations</h4>
                                            </div>
                                            <div className="form-group row mb-2">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Title<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="Dream Potential Conference Series" className="form-control" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Tagline<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="Gain Next Level Insights To Accelerate your learning" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">

                                                <div className="col-xl-12">
                                                    <label className="form-control-label">Description</label>
                                                    <textarea type="text" value="UX Designer" className="form-control">

                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row mb-2">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Category<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="Dream Potential Conference Series" className="form-control" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Banner<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="Gain Next Level Insights To Accelerate your learning" className="form-control" />
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                {/* <li className="previous d-inline-block" >
                                                    <a className="btn btn-secondary ripple">Previous</a>
                                                </li> */}
                                                <li className="next d-inline-block" >
                                                    <button
                                                        onClick={(e) => changeFormStep("step2")}
                                                        className='btn btn-lg btn-gradient-01'>
                                                        <span>
                                                            Next
                                                        </span>

                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-pane" id="tab2"
                                            style={{ display: formStepState["step2"] ? "block" : "none" }}>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Schedule</h4>
                                            </div>
                                            <div class="form-group row d-flex align-items-center mb-5">
                                                <label class="col-lg-3 form-control-label">Date Time</label>
                                                <div class="col-lg-9">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="la la-calendar"></i>
                                                            </span>
                                                            <input type="text" class="form-control" id="datetime" placeholder="Select value" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Invitation</h4>
                                            </div>

                                            <div className="form-group row mb-5">
                                                <label className="col-xl-1 form-control-label d-flex justify-content-lg-end">
                                                    Agenda</label>
                                                <div className="col-xl-8">
                                                    <input type="url" value="http://mywebsite.com" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-5">
                                                <label className="col-xl-1 form-control-label d-flex justify-content-lg-end">
                                                    Guests</label>
                                                <div className="col-xl-4">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" name="co_hosts" id="check-host" />
                                                        <label for="check-host">I would like to invite co-hosts</label>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" name="guest" id="check-guest" />
                                                        <label for="check-guest">I would like to invite guest's or speakers
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                <li className="previous d-inline-block">
                                                    <button
                                                        onClick={(e) => changeFormStep("step1")}
                                                        className='btn btn-secondary ripple'>
                                                        <span>
                                                            Previous
                                                        </span>

                                                    </button>
                                                </li>
                                                <li className="next d-inline-block">
                                                    <button
                                                        onClick={(e) => changeFormStep("step3")}
                                                        className='btn btn-lg btn-gradient-01'>
                                                        <span>
                                                            Next
                                                        </span>

                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane" id="tab3"
                                            style={{ display: formStepState["step3"] ? "block" : "none" }}>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Confirmation</h4>
                                            </div>
                                            <div id="accordion-icon-right" className="accordion">
                                                <div className="widget has-shadow">
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseOne" aria-expanded="true">
                                                        <div className="card-title w-100">1. Event Informations</div>
                                                    </a>
                                                    <div id="IconRightCollapseOne" className="card-body collapse show" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Title</div>
                                                            <div className="col-sm-8 form-control-plaintext">David Green</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Tagline</div>
                                                            <div className="col-sm-8 form-control-plaintext">dgreen@elisyam.com</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Description</div>
                                                            <div className="col-sm-8 form-control-plaintext">+00 987 654 32</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Category</div>
                                                            <div className="col-sm-8 form-control-plaintext">UX Designer</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Banner</div>
                                                            <div className="col-sm-8 form-control-plaintext">UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseTwo">
                                                        <div className="card-title w-100">2. Invitation</div>
                                                    </a>
                                                    <div id="IconRightCollapseTwo" className="card-body collapse" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Agenda</div>
                                                            <div className="col-sm-8 form-control-plaintext">123 Century Blvd</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Guests</div>
                                                            <div className="col-sm-8 form-control-plaintext">Country</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                <li className="previous d-inline-block">
                                                    <button
                                                        onClick={(e) => changeFormStep("step2")}
                                                        className='btn  btn-secondary ripple'>
                                                        <span>
                                                            Previous
                                                        </span>

                                                    </button>
                                                </li>
                                                <li className="next d-inline-block">
                                                    <button
                                                        // onClick={(e) => changeFormStep("step2")}
                                                        className='btn btn-lg btn-gradient-01'>
                                                        <span>
                                                            Create Event
                                                        </span>

                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //         </div>
        //     </Fragment>
        // </div>
    )
}

NewSchedule.propTypes = {
    toggling: PropTypes.object.isRequired,
    changeFormStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, { changeFormStep })(NewSchedule);
