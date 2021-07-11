import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ChatBox from "./chatbox";
import TabsStreaming from "./child/tabs-streaming";
import AboutHost from "./child/host-info";
import EventDetails from "./child/event-details";

function LiveStreaming({
  toggling: { toggleNavbarBurger, showTimeActiveSubStates, activeStreamingTab },
}) {
  return (
    <div
      className={toggleNavbarBurger ? "content-inner" : "content-inner active"}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="widget has-shadow">
              <div className="row post-video">
                <div className="col-12">
                  <figure className="img-hover-02">
                    <img
                      src="assets/img/videos/01.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <i className="ion-play"></i>
                    <a
                      href="https://www.youtube.com/watch?v=8Z1eMy2FoX4"
                      data-lity
                    ></a>
                  </figure>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-3">
            <ChatBox></ChatBox>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <TabsStreaming></TabsStreaming>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-9">
            {
              activeStreamingTab['aboutHost'] ?
              <AboutHost></AboutHost>
              : null 
            }
            {
              activeStreamingTab['eventDetails'] ?
              <EventDetails></EventDetails>
              : null 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

LiveStreaming.propTypes = {
  toggling: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, {})(LiveStreaming);
