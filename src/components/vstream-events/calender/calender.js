import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

function CalenderEvent({ show_time }) {
  return (
    <div className="row flex-row">
      <div className="col-3">
        <div
          className="widget has-shadow"
          style={{
            background: "rgb(26, 31, 99)",
            marginBottom: "0px",
            color: "white",
          }}
        >
          <div
            className="widget-header bordered no-actions"
            style={{ padding: "0.49rem", background: "transparent" }}
          >
            <h3
              className="text-center mt-3 mb-1"
              style={{
                color: "white",
                fontSize: "1.7rem",
                fontWeight: "700",
              }}
            >
              Event Schedule
            </h3>
            <p className="text-center">{moment().format("MMMM D, YYYY")}</p>
          </div>
          <div className="widget-body">
            <div id="external-events">
              <div className="fc-event-container">
                <div className="fc-event fc-bg-default">
                  <div className="fc-content">
                    <div className="fc-title">
                      <div className="media">
                        <div className="media-left pl-3 pr-3 align-self-center">
                          <span>{moment().format("h:mm")}</span>
                        </div>
                        <div className="media-body align-self-center">
                          <span >
                            <i className="la la-music mr-3"></i>Lorem Ipsum
                          </span>
                        </div>
                        <div className="media-right pr-3 align-self-center">
                          <div className="like text-center">
                            <i className="la la-angle-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-11">
            <div
              className="widget-header bordered "
              style={{ background: "transparent", color: "white" }}
            >
              <h2
                style={{
                  color: "white",
                  fontSize: "1.7rem",
                  fontWeight: "700",
                }}
              >
                Event Schedule
              </h2>
              <div className="title-time" style={{ fontWeight: "500" }}>
                <div className="time-author">
                  <span>May 11, 2021</span>
                </div>
              </div>
            </div>
            <div className="em-separator separator-dashed"></div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <span className="mr-2">Time</span>
                  <i className="la la-bell la-2x align-middle pr-2"></i>
                  Notifications
                  <i className="la la-bell la-2x align-middle pr-2" style={{right:"0"}}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-bolt la-2x align-middle pr-2"></i>Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-comments la-2x align-middle pr-2"></i>Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-bar-chart la-2x align-middle pr-2"></i>
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-clipboard la-2x align-middle pr-2"></i>Tasks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-gears la-2x align-middle pr-2"></i>Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="la la-question-circle la-2x align-middle pr-2"></i>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
       */}
      </div>
      <div className="col-8 mb-5 mt-3">
        <Calendar
          // selectable
          localizer={localizer}
          events={show_time.events}
          defaultView={Views.MONTH}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "-webkit-fill-available" }}
          // onSelectEvent={(event) => alert(event.title)}
          //   onSelectSlot={handleSelect}
        />
      </div>
    </div>
    // <div className="container-fluid">
    //   <EventCalender></EventCalender>
    // </div>
  );
}

CalenderEvent.propTypes = {
  show_time: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  show_time: state.show_time,
});

export default connect(mapStateToProps, {})(CalenderEvent);
