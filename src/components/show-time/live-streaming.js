import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ChatBox from "./chatbox";
import TabsStreaming from "./child/tabs-streaming";
import AboutHost from "./child/host-info";
import EventDetails from "./child/event-details";
import EventAnnouncement from "./child/event-announcement";
import Sample from "../../assets/img/home/banner_ad1.png";
import Live from "../../assets/icons/videos/live.png";
import Logo from "../../assets/user-img.png";
import ReactPlayer from "react-player/file";

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
              <div className="widget-body video-player">
                <div className="row post-video">
                  <div className="col-12">
                    {/* <ReactPlayer width="auto" url='http://media.w3.org/2010/05/sintel/trailer.mp4' /> */}

                    <figure
                      className="img-hover-02 img-fluid"
                      style={{
                        backgroundImage: 
                          "url(" +
                          "https://source.unsplash.com/user/erondu/600x400" +
                          ")",
                        height: "200px",
                      }}
                    >
                      {/* <header style={{ backgroundImage: 'url(' + 'https://source.unsplash.com/user/erondu/600x400' + ')' }} className="card-header"> */}
                      {/* <h4 className="card-header--title">{category}</h4> */}
                      <div style={{ textAlign:"left" }} className="ml-1 mt-1">
                        <img src={Live}></img>
                        <span className="ml-2">Best Songs of 2020 - Joe Holland</span>
                      </div>
                      {/* </header> */}
                      {/* <div className="card-header--title">
                        <img src={Live} style={{ textAlign: "right" }}></img>
                        <span>Best Songs</span>
                      </div> */}
                      {/* <img src={Sample} className="img-fluid" alt="..." /> */}
                      <i className="ion-play"></i>
                      <a
                        href="https://www.youtube.com/watch?v=8Z1eMy2FoX4"
                        data-lity
                      ></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="widget-footer d-flex align-items-center">
                <div className="col-12">
                  <div className="friends-list">
                    <div className="d-flex justify-content-between">
                      {[...Array(6)].map((x, i) => (
                        <a key={i}>
                          <img
                            src="https://d2phdgmkbm5x8b.cloudfront.net/img/us-passport-photo7.png"
                            style={{ maxWidth: "60%", height: "auto" }}
                            // class="img-fluid"
                            alt="..."
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="widget-footer d-flex align-items-center"
                style={{
                  background:
                    "linear-gradient(to right, #7E47AF 10%, #1A1F63 100%)",
                }}
              >
                <div className="col-8">
                  <div className="meta footer-item">
                    <ul>
                      <li>
                        <a>
                          <i className="la la-microphone"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="la la-video-camera ml-5"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="la la-slideshare ml-5"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="la la-genderless ml-5"></i>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="la la-share-square ml-5"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 no-padding d-flex justify-content-end">
                  <div className="meta footer-item">
                    <ul>
                      <li>
                        <a>
                          <i className="la la-star"></i>
                          <span className="numb">5.3K</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="la la-eye"></i>
                          <span className="numb">3.1k</span>
                        </a>
                      </li>
                    </ul>
                  </div>
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
            {activeStreamingTab["aboutHost"] ? <AboutHost></AboutHost> : null}
            {activeStreamingTab["eventDetails"] ? (
              <EventDetails></EventDetails>
            ) : null}
            {activeStreamingTab["announcement"] ? (
              <EventAnnouncement></EventAnnouncement>
            ) : null}
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
