import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import "../../../public/public-assets/vendors/calendar/fullcalendar.min.js";
// import "../../../public/public-assets/vendors/calendar/moment.min.js";
// import "../../../public/public-assets/vendors/app/app.min.js";
// import "../../../public/public-assets/vendors/nicescroll/nicescroll.min.js";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import "../../../node_modules/react-big-calendar/lib/addons/dragAndDrop";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { addEvent } from "../../actions/show-time";

const localizer = momentLocalizer(moment)

function EventCalender({ toggling: { toggleNavbarBurger, formStepState }, show_time, addEvent }) {
    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            addEvent({
                start,
                end,
                title,
              })
    }
    return (
        <div className="row">
            {/* <div className="widget-body"> */}
            <Calendar
                selectable
                localizer={localizer}
                events={show_time.events}
                defaultView={Views.MONTH}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width:'-webkit-fill-available' }}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={handleSelect}
                
            />
            {/* </div> */}
        </div>
        // <div className="row">
        //     <div className="col-xl-3">
        //         <div className="widget has-shadow">
        //             <div className="widget-header bordered no-actions">
        //                 <h2>Draggable Events</h2>
        //             </div>
        //             <div className="widget-body">
        //                 <div id="external-events">
        //                     <div className="remove-drop">
        //                         <div className="styled-checkbox">
        //                             <input type="checkbox" name="drop-remove" id="drop-remove" />
        //                             <label for="drop-remove">Remove after drop</label>
        //                         </div>
        //                     </div>
        //                     <div className="em-separator separator-dashed"></div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default mt-0">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-scissors"></i>Barber</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-birthday-cake"></i>Birthday</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-cutlery"></i>Food</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-glass"></i>Restaurant</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-graduation-cap"></i>School</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-medkit"></i>Medical</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-suitcase"></i>Work</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-plane"></i>Travel</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-futbol-o"></i>Sports</span></div>
        //                         </div>
        //                     </div>
        //                     <div className="fc-event-container">
        //                         <div className="fc-event fc-bg-default">
        //                             <div className="fc-content"><span className="fc-title"><i className="la la-child"></i>Baby Shower</span></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-xl-9">
        //         <div className="widget has-shadow">
        //             <div className="widget-header bordered d-flex align-items-center">
        //                 <h2>Calendar</h2>
        //                 <div className="widget-options">
        //                     <div className="dropdown">
        //                         <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
        //                             <i className="la la-ellipsis-h"></i>
        //                         </button>
        //                         <div className="dropdown-menu">
        //                             <a href="#" className="dropdown-item">
        //                                 Add Event
        //                                             </a>
        //                             <a href="app-calendar.html" className="dropdown-item">
        //                                 Basic Calendar
        //                                             </a>
        //                             <a href="app-calendar-list.html" className="dropdown-item">
        //                                 List Views
        //                                             </a>
        //                             <a href="app-calendar-event.html" className="dropdown-item">
        //                                 External Events
        //                                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="widget-body">
        //                 <div id="calendar-container">
        //                     <div id="calendar"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
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