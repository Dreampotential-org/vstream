import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { activeChatBox, showParticipants } from "../../actions/toggling";

function ChatBox({
  toggling: {
    toggleNavbarBurger,
    showTimeActiveSubStates,
    chatBoxVisible,
    chatActiveTab,
  },
  activeChatBox,
  showParticipants,
}) {
  return (
    <div
    // className={toggleNavbarBurger ? "content-inner" : "content-inner active"}
    >
      <button
        onClick={(e) => activeChatBox()}
        className="btn btn-lg btn-gradient-01"
        style={{ float: "right" }}
        // style={toggleLoader ? { pointerEvents: 'none' } : null}
      >
        <i class="la la-angle-left"></i>
        <span>Chatbox</span>
      </button>
      <div className="chat">
        <a href="#" className="go-top">
          <i className="la la-arrow-up"></i>
        </a>
        <div
          className={
            chatBoxVisible
              ? "off-sidebar from-right is-visible"
              : "off-sidebar from-right"
          }
        >
          <div className="off-sidebar-container">
            <header className="off-sidebar-header">
              <ul
                className="button-nav nav nav-tabs mt-3 mb-3 ml-3"
                role="tablist"
                id="weather-tab"
              >
                <li>
                  <a
                    className={chatActiveTab == "chatbox-tab" ? "active" : ""}
                    style={{ cursor:"pointer" }}
                    id="chatbox-tab"
                    onClick={(e) => showParticipants(e.target.id)}
                  >
                    Chatbox
                  </a>
                </li>
                <li>
                  <a
                    className={
                      chatActiveTab == "participant-tab" ? "active" : ""
                    }
                    style={{ cursor:"pointer" }}
                    id="participant-tab"
                    onClick={(e) => showParticipants(e.target.id)}
                  >
                    Participant
                  </a>
                </li>
              </ul>
              <a
                onClick={(e) => activeChatBox()}
                style={{ cursor:"pointer" }}
                className="off-sidebar-close"
              ></a>
            </header>
            <div className="off-sidebar-content offcanvas-scroll auto-scroll">
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className={
                    chatActiveTab === "chatbox-tab"
                      ? "tab-pane show active fade"
                      : "tab-pane fade"
                  }
                  id="messenger"
                  aria-labelledby="messenger-tab"
                >
                  <div className="widget widget-06 widget-body p-0">
                    <div
                      id="list-group"
                      className="widget-scroll"
                      style={{ maxHeight: "490px" }}
                    >
                      <ul className="reviews list-group w-100">
                        <li className="list-group-item">
                          <div className="media">
                            <div className="media-left align-self-start">
                              <img
                                src="assets/img/avatar/avatar-02.jpg"
                                className="user-img rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div className="media-body align-self-center">
                              <div className="username">
                                <h4>Brandon Smith</h4>
                              </div>
                              <div className="msg">
                                <p>WoW! Amazing Work!</p>
                              </div>
                            </div>
                            <div className="media-right pr-3 align-self-center">
                              <div className="like text-center">
                                <i className="ion-heart"></i>
                                <span>12</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="enter-message">
                    <div className="enter-message-button">
                      <a href="#" className="send">
                        <i className="la la-paperclip la-2x text-primary"></i>
                      </a>
                    </div>
                    <div className="enter-message-form">
                      <input type="text" placeholder="Enter your message..." />
                    </div>
                    <div className="enter-message-button">
                      <a href="#" className="send">
                        <i className="ion-paper-airplane"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  role="tabpanel"
                  className={
                    chatActiveTab === "participant-tab"
                      ? "tab-pane show active fade"
                      : "tab-pane fade"
                  }
                  id="today"
                  aria-labelledby="today-tab"
                >                  
                  <div className="sidebar-heading">Friends</div>
                  <div className="quick-friends mt-3 mb-3">
                    <ul className="list-group w-100">
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-02.jpg"
                              alt="..."
                              className="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <a href="javascript:void(0);">Brandon Smith</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-03.jpg"
                              alt="..."
                              className="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <a href="javascript:void(0);">Louis Henry</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-04.jpg"
                              alt="..."
                              className="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <a href="javascript:void(0);">Nathan Hunter</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-05.jpg"
                              alt="..."
                              className="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <a href="javascript:void(0);">Megan Duncan</a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-06.jpg"
                              alt="..."
                              className="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <a href="javascript:void(0);">Beverly Oliver</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-heading">Settings</div>
                  <div className="quick-settings mt-3 mb-3">
                    <ul className="list-group w-100">
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-body align-self-center">
                            <p className="text-dark">Notifications Email</p>
                          </div>
                          <div className="media-right align-self-center">
                            <label>
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                                checked
                              />
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-body align-self-center">
                            <p className="text-dark">Notifications Sound</p>
                          </div>
                          <div className="media-right align-self-center">
                            <label>
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                              />
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media">
                          <div className="media-body align-self-center">
                            <p className="text-dark">Chat Message Sound</p>
                          </div>
                          <div className="media-right align-self-center">
                            <label>
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                                checked
                              />
                              <span>
                                <span></span>
                              </span>
                            </label>
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
      </div>
    </div>
  );
}
ChatBox.propTypes = {
  toggling: PropTypes.object.isRequired,
  activeChatBox: PropTypes.func.isRequired,
  showParticipants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { activeChatBox, showParticipants })(
  ChatBox
);
