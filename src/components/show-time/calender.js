import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import "../../../node_modules/react-big-calendar/lib/addons/dragAndDrop";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { addEvent } from "../../actions/show-time";

const localizer = momentLocalizer(moment);

function EventCalender({
  toggling: { toggleNavbarBurger, formStepState },
  show_time,
  addEvent,
}) {
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      addEvent({
        start,
        end,
        title,
      });
  };
  return (
    <div className="row justify-content-center">
      {/* <div className="widget-body"> */}
      <Fragment>
        <div className="col-3">
          <div class="widget-32 widget-image bg-image">
            <div class="overlay"></div>
            <div class="content">
              <div id="events-day">{moment().format("dddd")}</div>
              <div id="events-date">{moment().date()}</div>
              <div id="events-year">{moment().format("MMMM YYYY")}</div>
            </div>
            <div class="real-time">
              <div id="events-time">{moment().format("h:mm:ss a")}</div>
            </div>
          </div>
          <div class="widget has-shadow">
            <div
              class="widget-header bordered no-actions"
              style={{ padding: "0.49rem", background: "transparent" }}
            >
              <h3
                class="text-center mt-3 mb-1"
                style={{
                  // color: "white",
                  fontSize: "1.7rem",
                  fontWeight: "700",
                }}
              >
                Event Schedule
              </h3>
              <p class="text-center">May 11, 2021</p>
            </div>
            <div class="widget-body">
              {show_time.events.map((event, i) => (
                <div className="fc-event-container" key={i}>
                  <div className="fc-event fc-bg-default">
                    <div className="fc-content">
                      <span className="fc-title">
                        <i className="la la-cutlery"></i>
                        {event.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
      <Fragment>
        <div className="col-9">
          <Calendar
            selectable
            localizer={localizer}
            events={show_time.events}
            defaultView={Views.MONTH}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, width: "-webkit-fill-available" }}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={handleSelect}
          />
        </div>
      </Fragment>
    </div>
  );
}

EventCalender.propTypes = {
  toggling: PropTypes.object.isRequired,
  show_time: PropTypes.object.isRequired,
  addEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  show_time: state.show_time,
});

export default connect(mapStateToProps, { addEvent })(EventCalender);
