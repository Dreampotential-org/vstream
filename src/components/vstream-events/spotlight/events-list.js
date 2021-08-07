import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap";

function EventList({ v_events }) {
  return (
    <div>
      {v_events.vEvents.map((event, i) => (
        <div className="row flex-row mb-4" key={i}>
          <div className="col-6">
            <div className="row align-items-center">
              <div className="col-12 ">
                {event.category.map((cat, j) => (
                  <Badge pill key={j} className="theme-color mr-1">
                    {cat}
                  </Badge>
                ))}
              </div>
              <div className="col-12 mt-2">
                <div className="my-event-list-info">
                  <div className="media-left align-self-start">
                    <div className="myDateOfEvent">
                      <span className="date">{event.date}</span>
                      <span className="month">{event.month}</span>
                    </div>
                  </div>
                  <div className="title-time">
                    <div className="event-title">
                      <h2>{event.title}</h2>
                    </div>
                    <div className="time-author">
                      <span>{event.time}</span>
                      <span className="rounded-circle theme-color ml-2">
                        <i className="la la-user"></i>
                      </span>
                      <span className="ml-1">{event.presentor}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2 ">
                <p>{event.description}</p>
              </div>
              <div className="col-2">
                <button
                  //   onClick={(e) => changeFormStep("step3")}
                  className="btn btn-md btn-gradient-01"
                >
                  <span>Join</span>
                </button>
              </div>
              <div className="col-3">
                <button
                  //   onClick={(e) => changeFormStep("step3")}
                  className="btn btn-md btn-gradient-01"
                >
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="col-2">
                <span className="dot">
                  <i className="la la-bell" style={{ fontSize: "x-large" }}></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              height="180px"
              src={event.banner}
            ></img>
          </div>
        </div>
      ))}
      <ul className="modal-footer">
        <li className="next d-inline-block">
          <button
            // onClick={(e) => changeFormStep("step2")}
            className="btn btn-lg btn-gradient-01 bg-color-event-list"
          >
            <span>Browse More Events</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

EventList.propTypes = {
  v_events: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  v_events: state.v_events,
});

export default connect(mapStateToProps, {})(EventList);
