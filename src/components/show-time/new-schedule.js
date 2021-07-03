import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFormStep, activeCollapsable } from "../../actions/toggling";
import { WithContext as ReactTags } from "react-tag-input";
import DateTimePicker from "react-datetime-picker";
import AgendaInput from "./child/agenda-input";
import { addAgenda } from "../../actions/show-time";

function NewSchedule({
  toggling: { toggleNavbarBurger, formStepState, collapsableState },
  changeFormStep,
  show_time: { agenda },
  addAgenda,
  activeCollapsable,
}) {
  const [value, onChange] = useState(new Date());

  const [eventBasicInfo, updateEventBasicInfo] = useState({
    title: "",
    tagline: "",
    description: "",
  });

  //   const editEventBasicInfo = (e) => {
  //     let key = e.target.id;
  //     updateEventBasicInfo({ ...eventBasicInfo, key: e.target.value });
  //   };

  const [tags, updateTags] = useState([
    { id: "Food", text: "Food" },
    { id: "Music", text: "Music" },
  ]);
  const KeyCodes = {
    comma: 188,
    enter: 13,
    tab: 9,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];
  const handleDelete = (i) => {
    updateTags(tags.filter((tag, index) => index !== i));
    // this.setState({
    //   tags: tags.filter((tag, index) => index !== i),
    // });
  };

  const handleAddition = (tag) => {
    updateTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    // const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    // this.setState({ tags: newTags });
    updateTags(newTags);
  };
  const agendaInput = (id, index) => {
    console.log(id, index);
  };
  return (
    // <div
    //     className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
    // >
    //     <Fragment>
    //         <div className='container-fluid'>
    <div className="row flex-row">
      <div className="col-12">
        <div className="widget has-shadow">
          <div className="widget-header bordered no-actions d-flex align-items-center">
            <h4>Schedule Event!</h4>
          </div>
          <div className="widget-body">
            <div className="row flex-row justify-content-center">
              <div className="col-12">
                <div id="rootwizard">
                  <div className="step-container">
                    <div className="step-wizard">
                      <div className="progress">
                        {formStepState["step1"] ? (
                          <div
                            className="progressbar"
                            style={{ width: "33.3333%" }}
                          ></div>
                        ) : formStepState["step2"] ? (
                          <div
                            className="progressbar"
                            style={{ width: "66.6667%" }}
                          ></div>
                        ) : formStepState["step3"] ? (
                          <div
                            className="progressbar"
                            style={{ width: "100%" }}
                          ></div>
                        ) : (
                          <div className="progressbar"></div>
                        )}
                      </div>
                      <ul>
                        <li
                          id="step1"
                          onClick={(e) => changeFormStep(e.target.id)}
                        >
                          <a
                            data-toggle="tab"
                            id="step1"
                            className={
                              formStepState["step1"] ? "active show" : ""
                            }
                          >
                            <span id="step1" className="step">
                              1
                            </span>
                            <span id="step1" className="title">
                              Step 1
                            </span>
                          </a>
                        </li>
                        <li
                          id="step2"
                          onClick={(e) => changeFormStep(e.target.id)}
                        >
                          <a
                            data-toggle="tab"
                            id="step2"
                            className={
                              formStepState["step2"] ? "active show" : ""
                            }
                          >
                            <span id="step2" className="step">
                              2
                            </span>
                            <span id="step2" className="title">
                              Step 2
                            </span>
                          </a>
                        </li>
                        <li
                          id="step3"
                          onClick={(e) => changeFormStep(e.target.id)}
                        >
                          <a
                            data-toggle="tab"
                            id="step3"
                            className={
                              formStepState["step3"] ? "active show" : ""
                            }
                          >
                            <span id="step3" className="step">
                              3
                            </span>
                            <span id="step3" className="title">
                              Step 3
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div
                      style={{
                        display: formStepState["step1"] ? "block" : "none",
                      }}
                      className="tab-pane"
                      id="tab1"
                    >
                      <div className="section-title mt-2 mb-3">
                        <h4>Event Informations</h4>
                      </div>
                      <div className="form-group row mb-2">
                        <div className="col-6 mb-3">
                          <label className="form-control-label">
                            Title<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            type="text"
                            value={eventBasicInfo.title}
                            className="form-control"
                            onChange={(e) =>
                              updateEventBasicInfo({
                                ...eventBasicInfo,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-control-label">
                            Tagline<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            type="text"
                            value={eventBasicInfo.tagline}
                            className="form-control"
                            onChange={(e) =>
                              updateEventBasicInfo({
                                ...eventBasicInfo,
                                tagline: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <div className="col-12">
                          <label className="form-control-label">
                            Description
                          </label>
                          <textarea
                            type="text"
                            value={eventBasicInfo.description}
                            className="form-control"
                            onChange={(e) =>
                              updateEventBasicInfo({
                                ...eventBasicInfo,
                                description: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row mb-2">
                        <div className="col-6 mb-3">
                          <label className="form-control-label">
                            Category<span className="text-danger ml-2">*</span>
                          </label>
                          <ReactTags
                            tags={tags}
                            // suggestions={suggestions}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            delimiters={delimiters}
                            inputFieldPosition="bottom"
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-control-label">
                            Banner<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            style={{ padding: ".375rem .75rem" }}
                          />
                        </div>
                      </div>
                      <ul className="pager wizard text-right">
                        {/* <li className="previous d-inline-block" >
                                                    <a className="btn btn-secondary ripple">Previous</a>
                                                </li> */}
                        <li className="next d-inline-block">
                          <button
                            onClick={(e) => changeFormStep("step2")}
                            className="btn btn-lg btn-gradient-01"
                          >
                            <span>Next</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="tab-pane"
                      id="tab2"
                      style={{
                        display: formStepState["step2"] ? "block" : "none",
                      }}
                    >
                      <div className="section-title mt-5 mb-5">
                        <h4>Schedule</h4>
                      </div>
                      <div className="form-group row mb-3">
                        <div className="col-12">
                          <label className="form-control-label">
                            Date and Time
                          </label>
                          <div className="form-group row ml-3">
                            <span class="dot ">
                              <i
                                className="la la-calendar-check-o"
                                style={{ fontSize: "x-large" }}
                              ></i>
                            </span>
                            <div className="col-5 mt-2">
                              <DateTimePicker
                                value={value}
                                onChange={onChange}
                              />
                            </div>
                            <span class="dot">
                              <i
                                className="la la-clock-o"
                                style={{ fontSize: "x-large" }}
                              ></i>
                            </span>
                            <div className="col-5 mt-2">
                              <DateTimePicker
                                value={value}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="section-title mt-5 mb-5">
                        <h4>Invitation</h4>
                      </div>

                      <div className="form-group row mb-3">
                        <div className="col-12">
                          <label className="form-control-label">Agenda</label>
                          {[...Array(agenda)].map((x, i) => (
                            <div className="form-group row" key={i}>
                              <div
                                className="col-1 mt-2"
                                onClick={(e) => addAgenda()}
                                style={{ cursor: "pointer" }}
                              >
                                <a>
                                  <i className="la la-plus"></i>
                                </a>
                              </div>
                              <AgendaInput
                                index={i}
                                agendaInput={agendaInput}
                              ></AgendaInput>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="form-group row mb-5">
                        <button
                          onClick={(e) => console.log("click!")}
                          className="btn btn-lg btn-gradient-01"
                          // style={toggleLoader ? { pointerEvents: 'none' } : null}
                        >
                          <i class="la la-user-plus"></i>
                          <span
                          // style={toggleLoader ? { marginLeft: "10px" } : null}
                          >
                            Invite Co-host, Guests, or Speakers
                          </span>
                        </button>
                      </div>
                      <ul className="pager wizard text-right">
                        <li className="previous d-inline-block">
                          <button
                            onClick={(e) => changeFormStep("step1")}
                            className="btn btn-secondary ripple"
                          >
                            <span>Previous</span>
                          </button>
                        </li>
                        <li className="next d-inline-block">
                          <button
                            onClick={(e) => changeFormStep("step3")}
                            className="btn btn-lg btn-gradient-01"
                          >
                            <span>Next</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane"
                      id="tab3"
                      style={{
                        display: formStepState["step3"] ? "block" : "none",
                      }}
                    >
                      <div className="section-title mt-5 mb-5">
                        <h4>Confirmation</h4>
                      </div>
                      <div id="accordion-icon-right" className="accordion">
                        <div className="widget has-shadow">
                          <a
                            className="card-header collapsed d-flex align-items-center"
                            data-toggle="collapse"
                            aria-expanded="true"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => activeCollapsable("step1")}
                          >
                            <div className="card-title w-100">
                              1. Event Informations
                            </div>
                          </a>
                          <div
                            id="IconRightCollapseOne"
                            data-parent="#accordion-icon-right"
                            className={
                              collapsableState["step1"]
                                ? "card-body collapse show"
                                : "card-body collapse"
                            }
                          >
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Title
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                {eventBasicInfo.title}
                              </div>
                            </div>
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Tagline
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                {eventBasicInfo.tagline}
                              </div>
                            </div>
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Description
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                {eventBasicInfo.description}
                              </div>
                            </div>
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Category
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                <ul className="quizzes-list">
                                  <Fragment>
                                    {tags.map((data, index) => (
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
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Banner
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                UX Designer
                              </div>
                            </div>
                          </div>
                          <a
                            className="card-header collapsed d-flex align-items-center"
                            data-toggle="collapse"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => activeCollapsable("step2")}
                          >
                            <div className="card-title w-100">
                              2. Invitation
                            </div>
                          </a>
                          <div
                            id="IconRightCollapseTwo"
                            className={
                              collapsableState["step2"]
                                ? "card-body collapse show"
                                : "card-body collapse"
                            }
                            data-parent="#accordion-icon-right"
                          >
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Agenda
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                123 Century Blvd
                              </div>
                            </div>
                            <div className="form-group row mb-5">
                              <div className="col-sm-3 form-control-label d-flex align-items-center">
                                Guests
                              </div>
                              <div className="col-sm-8 form-control-plaintext">
                                Country
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="pager wizard text-right">
                        <li className="previous d-inline-block">
                          <button
                            onClick={(e) => changeFormStep("step2")}
                            className="btn  btn-secondary ripple"
                          >
                            <span>Previous</span>
                          </button>
                        </li>
                        <li className="next d-inline-block">
                          <button
                            // onClick={(e) => changeFormStep("step2")}
                            className="btn btn-lg btn-gradient-01"
                          >
                            <span>Create Event</span>
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
  );
}

NewSchedule.propTypes = {
  toggling: PropTypes.object.isRequired,
  changeFormStep: PropTypes.func.isRequired,
  addAgenda: PropTypes.func.isRequired,
  show_time: PropTypes.object.isRequired,
  activeCollapsable: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  show_time: state.show_time,
});

export default connect(mapStateToProps, {
  changeFormStep,
  activeCollapsable,
  addAgenda,
})(NewSchedule);
