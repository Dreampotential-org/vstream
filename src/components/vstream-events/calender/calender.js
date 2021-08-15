import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventCalender from "../../show-time/calender";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

function CalenderEvent({ show_time }) {
  return (
    <div className="row">
      <div
        className="col-3"
        style={{
          background: "rgb(26, 31, 99)",
        }}
      >
        <div className="row justify-content-center">
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
          </div>
        </div>
      </div>
      <div className="col-8 mb-5 mt-3">
        <Calendar
          selectable
          localizer={localizer}
          events={show_time.events}
          defaultView={Views.MONTH}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "-webkit-fill-available" }}
          onSelectEvent={(event) => alert(event.title)}
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
