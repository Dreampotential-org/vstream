import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../assets/css/streaming.css";
import { changeTabStreaming } from "../../../actions/toggling";
import Sample from "../../../assets/img/home/banner_ad1.png";

function EventAnnouncement({ toggling, changeTabStreaming }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 about-infos d-flex flex-column">
          <div className="widget-header d-flex align-items-center">
            <div className="user-image">
              <span className="dot"></span>
            </div>
            <div className="d-flex flex-column mr-auto">
              <div className="title">
                <h1 className="username">Joe Holland</h1>
              </div>
              <span>1 min Ago</span>
            </div>
          </div>

          <div className="widget-body">
            <p>
              Nullam aliquam felis ut elit rutrum mattis. Curabitur arcu eros,
              imperdiet id gravida sit amet, pulvinar non ex. Cras ac ligula
              eget sapien suscipit luctus non a risus.
            </p>
            <p>
              Integer lobortis justo erat, ac faucibus risus laoreet semper.
              Aenean et sollicitudin ante, vel finibus velit.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="col-md-6 about-infos d-flex flex-column">
          <img className="img-fluid" alt="..." src={Sample}></img>
        </div>
      </div>
      <div className="widget-footer d-flex align-items-center">
        <div className="col-xl-8 col-md-8 col-7 no-padding d-flex justify-content-start"></div>
        <div className="col-xl-4 col-md-4 col-5 no-padding d-flex justify-content-end">
          <div className="meta">
            <ul>
              <li>
                <a>
                  <i className="la la-comment"></i>
                  <span className="numb">12</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="la la-heart-o"></i>
                  <span className="numb">30</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="widget widget-06 has-shadow">
            <div class="widget-body p-0">
              <div
                id="list-group"
                class="widget-scroll"
                style={{ maxHeight: "490px", overflow:"hidden", outline:"none" }}
              >
                <ul class="reviews list-group w-100">
                  <li class="list-group-item">
                    <div class="media">
                      <div class="media-left align-self-start">
                        <img
                          src="assets/img/avatar/avatar-02.jpg"
                          class="user-img rounded-circle"
                          alt="..."
                        />
                      </div>
                      <div class="media-body align-self-center">
                        <div class="username">
                          <h4>Brandon Smith</h4>
                        </div>
                        <div class="msg">
                          <div class="stars">
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star-half-empty"></i>
                          </div>
                          <p>WoW! Amazing Work!</p>
                        </div>
                        <div class="meta">
                          <span class="mr-3">30 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EventAnnouncement.propTypes = {
  toggling: PropTypes.object.isRequired,
  changeTabStreaming: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { changeTabStreaming })(
  EventAnnouncement
);
