import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ChatBox({
  toggling: { toggleNavbarBurger, showTimeActiveSubStates },
}) {
  return (
    <div
      className={toggleNavbarBurger ? "content-inner" : "content-inner active"}
    >
      <div class="chat">
        <div class="container-fluid p-0">
          <div class="row m-0">
            <div class="col-12 p-0">
              <div class="row m-0 widget no-bg">
                <div class="col-2 p-0" id="sidebar">
                  <div class="sidebar-content w-100 h-100">
                    <div class="input-group no-padding" id="search-group">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Search friends ..."
                        id="search-name"
                      />
                    </div>
                    <div id="list-group">
                      <ul
                        class="friend-list list-group w-100 friends-scroll auto-scroll"
                        style={{
                          height: "100%",
                          overflow: "hidden",
                          outline: "None",
                        }}
                      >
                        <li class="heading">Chats</li>
                        <li class="list-group-item">
                          <a class="d-block" data-toggle="tab" href="#msg-1">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-02.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Brandon Smith</h4>
                                <p>Are you serious ?</p>
                              </div>
                              <div class="media-right align-self-center">
                                <span class="date-send">14:21</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a class="d-block" data-toggle="tab" href="#msg-2">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-03.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Louis Henry</h4>
                                <p>Bonne idée ...</p>
                              </div>
                              <div class="media-right align-self-center">
                                <span class="date-send">10:35</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a class="d-block" data-toggle="tab" href="#msg-3">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-04.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Nathan Hunter</h4>
                                <p>Nope!</p>
                              </div>
                              <div class="media-right align-self-center">
                                <span class="date-send">14:10</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a class="d-block" data-toggle="tab" href="#msg-4">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-05.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Megan Duncan</h4>
                                <p>See you later!</p>
                              </div>
                              <div class="media-right align-self-center">
                                <span class="date-send">16:09</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item">
                          <a class="d-block" data-toggle="tab" href="#msg-5">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-06.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Beverly Oliver</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="heading">Contacts</li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-07.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Lisa Garett</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-08.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Peter Collins</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-09.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Michael Bradley</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-02.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Brandon Smith</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-03.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Nathan Hunter</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-04.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Megan Duncan</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-07.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Lisa Garett</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-08.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Peter Collins</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="list-group-item contacts">
                          <a href="pages-profile.html">
                            <div class="media">
                              <div class="media-left align-self-center">
                                <img
                                  src="assets/img/avatar/avatar-09.jpg"
                                  class="user-img rounded-circle"
                                  alt="..."
                                />
                              </div>
                              <div class="media-body align-self-center">
                                <h4>Michael Bradley</h4>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-4 d-flex no-padding">
                  <div class="card w-100 no-bg">
                    <div class="tab-content">
                      <div
                        class="tab-pane fade show active messages-scroll auto-scroll"
                        style={{ flex: "1 1" }}
                        id="msg-1"
                      >
                        <div class="card-header">
                          <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                            <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                              <div class="discussion-name">Brandon Smith</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-star-o la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-phone la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="javascript:void(0)">
                                    <i class="la la-play-circle la-2x"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card-body d-flex flex-column no-padding">
                          <div class="container-fluid">
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>Hi, Brandon</span>
                                </div>
                                <span class="sender-time">
                                  <small>14:00</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span>Hello, David</span>
                                </div>
                                <span class="receiver-time">
                                  <small>14:02</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-02.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade messages-scroll auto-scroll"
                        style={{ flex: "1 1" }}
                        id="msg-2"
                      >
                        <div class="card-header">
                          <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                            <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                              <div class="discussion-name">Louis Henry</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-star-o la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-phone la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="javascript:void(0)">
                                    <i class="la la-play-circle la-2x"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card-body d-flex flex-column no-padding">
                          <div class="container-fluid">
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    Bonjour, comment ça va?
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>10:30</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-03.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>Pourquoi tu parle en français?</span>
                                </div>
                                <span class="sender-time">
                                  <small>10:32</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    Pour faire un petit coucou aux utilisateurs
                                    français!
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>10:34</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-03.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>
                                    Bonne idée, coucou à toi qui lis ces lignes
                                    :)
                                  </span>
                                </div>
                                <span class="sender-time">
                                  <small>10:35</small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade messages-scroll auto-scroll"
                        style={{ flex: "1 1" }}
                        id="msg-3"
                      >
                        <div class="card-header">
                          <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                            <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                              <div class="discussion-name">Nathan Hunter</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-star-o la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-phone la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="javascript:void(0)">
                                    <i class="la la-play-circle la-2x"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card-body d-flex flex-column no-padding">
                          <div class="container-fluid">
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    In a commodo ante, quis dignissim odio.
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>14:02</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-04.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    Vestibulum eget facilisis risus. Integer ac
                                    sem quis risus scelerisque gravida vel nec
                                    tellus.
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>14:03</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-04.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>Nope!</span>
                                </div>
                                <span class="sender-time">
                                  <small>14:10</small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade messages-scroll auto-scroll"
                        style={{ flex: "1 1" }}
                        id="msg-4"
                      >
                        <div class="card-header">
                          <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                            <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                              <div class="discussion-name">Megan Duncan</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-star-o la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-phone la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="javascript:void(0)">
                                    <i class="la la-play-circle la-2x"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card-body d-flex flex-column no-padding">
                          <div class="container-fluid">
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>
                                    You coming to the meeting tomorrow?
                                  </span>
                                </div>
                                <span class="sender-time">
                                  <small>16:00</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    Yes, we must see together the next updates
                                    of elisyam!
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>16:01</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-05.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    Have you ever done something?
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>16:03</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-05.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>
                                    Yes, I already planned the addition of
                                    several features!
                                  </span>
                                </div>
                                <span class="sender-time">
                                  <small>16:05</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>
                                    But if you have an idea, do not hesitate to
                                    tell me!
                                  </span>
                                </div>
                                <span class="sender-time">
                                  <small>16:06</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">
                                    We will speak tomorrow!
                                  </span>
                                </div>
                                <span class="receiver-time">
                                  <small>16:07</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-05.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div class="row m-0">
                              <div class="message-card">
                                <div class="card-body sender-background">
                                  <span>Okay, good evening</span>
                                </div>
                                <span class="sender-time">
                                  <small>16:08</small>
                                </span>
                              </div>
                            </div>
                            <div class="row m-0 justify-content-end">
                              <div class="message-card">
                                <div class="card-body receiver-background">
                                  <span class="mx-2">See you tomorrow</span>
                                </div>
                                <span class="receiver-time">
                                  <small>16:09</small>
                                </span>
                              </div>
                              <img
                                src="assets/img/avatar/avatar-05.jpg"
                                class="avatar-bubble rounded-circle"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade messages-scroll auto-scroll"
                        style={{ flex: "1 1" }}
                        id="msg-5"
                      >
                        <div class="card-header">
                          <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                            <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                              <div class="discussion-name">Beverly Oliver</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-star-o la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                  <a href="javascript:void(0)">
                                    <i class="la la-phone la-2x"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="javascript:void(0)">
                                    <i class="la la-play-circle la-2x"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="card-body d-flex flex-column no-padding">
                          <div class="container-fluid">
                            <div class="container-fluid">
                              <div class="no-messages">
                                <i class="la la-comments"></i>
                                <div class="text">No Messages</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-group">
                      <span class="input-group-btn">
                        <button class="btn" type="button">
                          <i class="la la-paperclip la-2x text-primary"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        class="form-control no-ppading-right no-padding-left"
                        placeholder="Type your message ..."
                      />
                      <span class="input-group-btn">
                        <button class="btn" type="button">
                          <i class="la la-paper-plane la-2x text-primary"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer class="main-footer">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
              <p class="text-gradient-02">Developed By Dreampotential</p>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="documentation.html">
                    Documentation
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="changelog.html">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer> */}
        <a href="#" class="go-top">
          <i class="la la-arrow-up"></i>
        </a>
        <div class="off-sidebar from-right">
          <div class="off-sidebar-container">
            <header class="off-sidebar-header">
              <ul
                class="button-nav nav nav-tabs mt-3 mb-3 ml-3"
                role="tablist"
                id="weather-tab"
              >
                <li>
                  <a
                    class="active"
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
              <a href="#off-canvas" class="off-sidebar-close"></a>
            </header>
            <div class="off-sidebar-content offcanvas-scroll auto-scroll">
              <div class="tab-content">
                <div
                  role="tabpanel"
                  class="tab-pane show active fade"
                  id="messenger"
                  aria-labelledby="messenger-tab"
                >
                  <span class="date">Today</span>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="assets/img/avatar/avatar-02.jpg"
                      alt="..."
                    />
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>
                          <span class="mb-2">Brandon wrote</span>
                          Hi David, what's up?
                        </p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localization font-size-small">
                          2 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Hi Brandon, fine and you?</p>
                        <p>I'm working on the next update of Elisyam</p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localisation font-size-small">
                          3 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="assets/img/avatar/avatar-02.jpg"
                      alt="..."
                    />
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>
                          <span class="mb-2">Brandon wrote</span>I can't wait to
                          see
                        </p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localization font-size-small">
                          5 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>I'm almost done</p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localisation font-size-small">
                          10 minutes ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <span class="date">Yesterday</span>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="assets/img/avatar/avatar-05.jpg"
                      alt="..."
                    />
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>I updated the server tonight</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Didn't you have any problems?</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="assets/img/avatar/avatar-05.jpg"
                      alt="..."
                    />
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>No!</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Great!</p>
                        <p>See you later!</p>
                      </div>
                    </div>
                  </div>

                  <div class="enter-message">
                    <div class="enter-message-form">
                      <input type="text" placeholder="Enter your message..." />
                    </div>
                    <div class="enter-message-button">
                      <a href="#" class="send">
                        <i class="ion-paper-airplane"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  role="tabpanel"
                  class="tab-pane fade"
                  id="today"
                  aria-labelledby="today-tab"
                >
                  <div class="sidebar-heading pt-0">Today</div>
                  <div class="today-stats mt-3 mb-3">
                    <div class="row">
                      <div class="col-4 text-center">
                        <i class="la la-users"></i>
                        <div class="counter">264</div>
                        <div class="heading">Clients</div>
                      </div>
                      <div class="col-4 text-center">
                        <i class="la la-cart-arrow-down"></i>
                        <div class="counter">360</div>
                        <div class="heading">Sales</div>
                      </div>
                      <div class="col-4 text-center">
                        <i class="la la-money"></i>
                        <div class="counter">$ 4,565</div>
                        <div class="heading">Earnings</div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-heading">Friends</div>
                  <div class="quick-friends mt-3 mb-3">
                    <ul class="list-group w-100">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-02.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Brandon Smith</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-03.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Louis Henry</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-04.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Nathan Hunter</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-05.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Megan Duncan</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="assets/img/avatar/avatar-06.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style={{ width: "35px" }}
                            />
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Beverly Oliver</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="sidebar-heading">Settings</div>
                  <div class="quick-settings mt-3 mb-3">
                    <ul class="list-group w-100">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Notifications Email</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input
                                class="toggle-checkbox"
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
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Notifications Sound</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input class="toggle-checkbox" type="checkbox" />
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Chat Message Sound</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input
                                class="toggle-checkbox"
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
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, {})(ChatBox);
