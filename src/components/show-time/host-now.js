import React, { Fragment,  useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFormStep } from "../../actions/toggling";
import { addAgenda } from "../../actions/show-time";
import { WithContext as ReactTags } from "react-tag-input";

function AgendaInput({ index, agendaInput }) {
  return (
    <>
      <div className="col-xl-3">
        <input
          id="time"
          name={index}
          type="text"
          placeholder="Select Time"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Dream Potential Conference Series"
          className="form-control"
        />
      </div>
      <div className="col-xl-4">
        <input
          id="agenda"
          name={index}
          type="text"
          placeholder="Agenda"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Gain Next Level Insights To Accelerate your learning"
          className="form-control"
        />
      </div>
      <div className="col-xl-4">
        <input
          id="description"
          name={index}
          type="text"
          placeholder="Add Description"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Gain Next Level Insights To Accelerate your learning"
          className="form-control"
        />
      </div>
    </>
  );
}

function HostNow({
  toggling: { toggleNavbarBurger, formStepState },
  show_time: { agenda },
  changeFormStep,
  addAgenda,
}) {
  const [eventBasicInfo, updateEventBasicInfo] = useState({
    title: "",
    tagline: "",
    description: "",
  });

  const KeyCodes = {
    comma: 188,
    enter: 13,
    tab: 9,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];
  const [tags, updateTags] = useState([
    { id: "Food", text: "Food" },
    { id: "Music", text: "Music" },
  ]);
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

  // const handleTagClick = (index) => {
  //   console.log("The tag at index " + index + " was clicked");
  // };

  const agendaInput = (id, index) => {
    console.log(id, index);
  };

  // const editEventBasicInfo = (e) => {
  //   let key = e.target.id;
  //   updateEventBasicInfo({ ...eventBasicInfo, key: e.target.value });
  // };

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
            <h4>Host Now!</h4>
          </div>
          <div className="widget-body">
            <div className="row flex-row justify-content-center">
              <div className="col-xl-10">
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
                        <div className="col-xl-6 mb-3">
                          <label className="form-control-label">
                            Title<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            id="title"
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
                        <div className="col-xl-6">
                          <label className="form-control-label">
                            Tagline<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            id="tagline"
                            type="text"
                            value={eventBasicInfo.tagline}
                            className="form-control"
                            onChange={(e) =>
                              updateEventBasicInfo({
                                ...eventBasicInfo,
                                tagline: e.target.value,
                              })
                            }
                            // onChange={(e) => eventBasicInfo(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <div className="col-xl-12">
                          <label className="form-control-label">
                            Description
                          </label>
                          <textarea
                            id="description"
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
                        <div className="col-xl-6 mb-3">
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
                        <div className="col-xl-6">
                          <label className="form-control-label">
                            Banner<span className="text-danger ml-2">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            style={{ padding: ".375rem .75rem" }}
                          />
                          {/* <button
                            // onClick={(e) => changeFormStep("step2")}
                            className="form-control btn btn-lg btn-gradient-01"
                          >
                            <span>Next</span>
                          </button> */}
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
                        <h4>Invitation</h4>
                      </div>

                      <div className="form-group row mb-3">
                        <div className="col-xl-12">
                          <label className="form-control-label">Agenda</label>
                          {[...Array(agenda)].map((x, i) => (
                            <div className="form-group row" key={i}>
                              <div
                                className="col-xl-1 mt-2"
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
                        {/* <div className="col-xl-4">
                          <div className="styled-checkbox">
                            <input
                              type="checkbox"
                              name="co_hosts"
                              id="check-host"
                            />
                            <label for="check-host">
                              I would like to invite co-hosts
                            </label>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="styled-checkbox">
                            <input
                              type="checkbox"
                              name="guest"
                              id="check-guest"
                            />
                            <label for="check-guest">
                              I would like to invite guest's or speakers
                            </label>
                          </div>
                        </div> */}
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
                            href="#IconRightCollapseOne"
                            aria-expanded="true"
                          >
                            <div className="card-title w-100">
                              1. Event Informations
                            </div>
                          </a>
                          <div
                            id="IconRightCollapseOne"
                            className="card-body collapse show"
                            data-parent="#accordion-icon-right"
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
                            href="#IconRightCollapseTwo"
                          >
                            <div className="card-title w-100">
                              2. Invitation
                            </div>
                          </a>
                          <div
                            id="IconRightCollapseTwo"
                            className="card-body collapse"
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
                            <span>Golive</span>
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

HostNow.propTypes = {
  toggling: PropTypes.object.isRequired,
  show_time: PropTypes.object.isRequired,
  changeFormStep: PropTypes.func.isRequired,
  addAgenda: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  show_time: state.show_time,
});

export default connect(mapStateToProps, { changeFormStep, addAgenda })(HostNow);
