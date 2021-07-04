import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function LiveStreaming({
  toggling: { toggleNavbarBurger, showTimeActiveSubStates },
}) {
  return (
    <div
      className={toggleNavbarBurger ? "content-inner" : "content-inner active"}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
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
                <div className="col-xl-5 col-lg-12 col-12 mt-auto mb-auto">
                  <div className="widget-header d-flex align-items-center">
                    <div className="user-image">
                      <img
                        className="rounded-circle"
                        src="assets/img/avatar/avatar-04.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="d-flex flex-column mr-auto">
                      <div className="title">
                        <span className="username">Nathan Hunter</span> shared a
                        link
                      </div>
                      <div className="time">52 min ago</div>
                    </div>
                    <div className="widget-options">
                      <div className="dropdown">
                        <button
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="dropdown-toggle"
                        >
                          <i className="la la-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu">
                          <a
                            // href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="la la-edit"></i>Edit Post
                          </a>
                          <a
                            // href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="la la-trash"></i>Delete Post
                          </a>
                          <a
                            // href="javascript:void(0);"
                            className="dropdown-item"
                          >
                            <i className="la la-bell-slash"></i>Disable
                            Notifications
                          </a>
                          <a
                            // href="javascript:void(0);"
                            className="dropdown-item faq"
                          >
                            <i className="la la-question-circle"></i>FAQ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="widget-body">
                    <p>
                      Hey <a href="db-social.html">David</a>, look at this,
                      you'll love it. Tell me what you think !
                    </p>
                  </div> */}

                  {/* <div className="widget-footer d-flex align-items-center">
                    <div className="col-xl-8 col-md-8 col-7 no-padding d-flex justify-content-start align-items-center">
                      <div className="users-like">
                        <a href="javascript:void(0);">
                          <img
                            src="assets/img/avatar/avatar-01.jpg"
                            className="img-fluid rounded-circle"
                            alt="..."
                          />
                        </a>
                        <a href="javascript:void(0);">
                          <img
                            src="assets/img/avatar/avatar-02.jpg"
                            className="img-fluid rounded-circle"
                            alt="..."
                          />
                        </a>
                        <a href="javascript:void(0);">
                          <img
                            src="assets/img/avatar/avatar-03.jpg"
                            className="img-fluid rounded-circle"
                            alt="..."
                          />
                        </a>
                        <a href="javascript:void(0);">
                          <img
                            src="assets/img/avatar/avatar-09.jpg"
                            className="img-fluid rounded-circle"
                            alt="..."
                          />
                        </a>
                        <a className="view-more" href="javascript:void(0);">
                          +4
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 col-5 no-padding d-flex justify-content-end">
                      <div className="meta">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="la la-comment"></i>
                              <span className="numb">12</span>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">
                              <i className="la la-heart-o"></i>
                              <span className="numb">18</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget-scroll" style="max-height:285px;">
                    <div className="comments bg-white">
                      <div className="comments-header d-flex align-items-center">
                        <div className="user-image">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatar/avatar-05.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="d-flex flex-column mr-auto">
                          <div className="title">
                            <span className="username">Megan Duncan</span>
                          </div>
                          <div className="time">10 min ago</div>
                        </div>
                      </div>
                      <div className="comments-body">
                        <p>
                          Orci varius natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Suspendisse potenti.
                          Nulla mi arcu, faucibus at urna vitae, consectetur
                          vehicula nunc.
                        </p>
                      </div>
                      <div className="comments-footer d-flex align-items-center">
                        <div className="meta">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <i className="la la-flag"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <span className="rep">Reply</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="comments bg-white">
                      <div className="comments-header d-flex align-items-center">
                        <div className="user-image">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatar/avatar-08.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="d-flex flex-column mr-auto">
                          <div className="title">
                            <span className="username">Peter Collins</span>
                          </div>
                          <div className="time">1 hour ago</div>
                        </div>
                      </div>
                      <div className="comments-body">
                        <p>
                          Donec magna ante, ultricies in justo pretium, maximus
                          pharetra lacus. Praesent porttitor diam suscipit
                          lobortis pulvinar. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed et sapien ligula.
                          Cras fringilla, nulla non tincidunt pretium, orci
                          purus consectetur eros, non fringilla dolor ante id
                          ipsum.
                        </p>
                      </div>
                      <div className="comments-footer d-flex align-items-center">
                        <div className="meta">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <i className="la la-flag"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <span className="rep">Reply</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="comments bg-white">
                      <div className="comments-header d-flex align-items-center">
                        <div className="user-image">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatar/avatar-02.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="d-flex flex-column mr-auto">
                          <div className="title">
                            <span className="username">Brandon Smith</span>
                          </div>
                          <div className="time">2 hours ago</div>
                        </div>
                      </div>
                      <div className="comments-body">
                        <p>
                          Etiam dignissim scelerisque pellentesque. Mauris vitae
                          ligula elit. Praesent scelerisque tortor id est varius
                          posuere. Maecenas consectetur, diam ut sollicitudin
                          lacinia, leo odio consequat risus, dictum finibus eros
                          nisl vitae leo. Sed viverra varius commodo. Curabitur
                          quis felis eu sem maximus ullamcorper.
                        </p>
                      </div>
                      <div className="comments-footer d-flex align-items-center">
                        <div className="meta">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <i className="la la-flag"></i>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <span className="rep">Reply</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="off-sidebar from-right">
        <div className="off-sidebar-container">
          <header className="off-sidebar-header">
            <ul
              className="button-nav nav nav-tabs mt-3 mb-3 ml-3"
              role="tablist"
              id="weather-tab"
            >
              <li>
                <a
                  className="active"
                  data-toggle="tab"
                  href="#messenger"
                  role="tab"
                  id="messenger-tab"
                >
                  Messages
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#today" role="tab" id="today-tab">
                  Today
                </a>
              </li>
            </ul>
            <a href="#off-canvas" className="off-sidebar-close"></a>
          </header>
          <div className="off-sidebar-content offcanvas-scroll auto-scroll">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane show active fade"
                id="messenger"
                aria-labelledby="messenger-tab"
              >
                <span className="date">Today</span>
                <div className="messenger-message messenger-message-sender">
                  <img
                    className="messenger-image messenger-image-default"
                    src="assets/img/avatar/avatar-02.jpg"
                    alt="..."
                  />
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>
                        <span className="mb-2">Brandon wrote</span>
                        Hi David, what's up?
                      </p>
                    </div>
                    <div className="messenger-details">
                      <span className="messenger-message-localization font-size-small">
                        2 minutes ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-recipient">
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>Hi Brandon, fine and you?</p>
                      <p>I'm working on the next update of Elisyam</p>
                    </div>
                    <div className="messenger-details">
                      <span className="messenger-message-localisation font-size-small">
                        3 minutes ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-sender">
                  <img
                    className="messenger-image messenger-image-default"
                    src="assets/img/avatar/avatar-02.jpg"
                    alt="..."
                  />
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>
                        <span className="mb-2">Brandon wrote</span>I can't wait to
                        see
                      </p>
                    </div>
                    <div className="messenger-details">
                      <span className="messenger-message-localization font-size-small">
                        5 minutes ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-recipient">
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>I'm almost done</p>
                    </div>
                    <div className="messenger-details">
                      <span className="messenger-message-localisation font-size-small">
                        10 minutes ago
                      </span>
                    </div>
                  </div>
                </div>
                <span className="date">Yesterday</span>
                <div className="messenger-message messenger-message-sender">
                  <img
                    className="messenger-image messenger-image-default"
                    src="assets/img/avatar/avatar-05.jpg"
                    alt="..."
                  />
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>I updated the server tonight</p>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-recipient">
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>Didn't you have any problems?</p>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-sender">
                  <img
                    className="messenger-image messenger-image-default"
                    src="assets/img/avatar/avatar-05.jpg"
                    alt="..."
                  />
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>No!</p>
                    </div>
                  </div>
                </div>
                <div className="messenger-message messenger-message-recipient">
                  <div className="messenger-message-wrapper">
                    <div className="messenger-message-content">
                      <p>Great!</p>
                      <p>See you later!</p>
                    </div>
                  </div>
                </div>

                <div className="enter-message">
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
            </div>
          </div>
        </div>
      </div>
     */}
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
