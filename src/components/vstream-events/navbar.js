import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "../../assets/img/vstream-logo.png";
import { Link, NavLink } from "react-router-dom";
import { onClickEventNavbar } from "../../actions/toggling";

function VstreamEventNavbar({
  toggling: { eventNavbarStates },
  onClickEventNavbar,
}) {
  return (
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <div class="navbar-holder d-flex align-items-center align-middle justify-content-between">
            <div class="navbar-header">
              <Link to="/spotlight" className="navbar-brand">
                <div class="brand-image brand-big">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "70px" }}
                    class="logo-big"
                  />
                </div>
                <div class="brand-image brand-small">
                  <img src={Logo} alt="logo" class="logo-small" />
                </div>
              </Link>
            </div>

            <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
              <div class="horizontal-menu">
                <div class="container">
                  <div class="row">
                    <nav class="navbar navbar-light navbar-expand-lg main-menu">
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav mr-auto ">
                          <li
                            className={
                              eventNavbarStates.activeSpotlight
                                ? "active"
                                : "none"
                            }
                          >
                            <NavLink
                              id="activeSpotlight"
                              to="/spotlight"
                              onClick={(e) => onClickEventNavbar(e.target.id)}
                            >
                              Spotlight
                            </NavLink>
                          </li>
                          <li
                            className={
                              eventNavbarStates.activeDiscover
                                ? "active"
                                : "none"
                            }
                          >
                            <NavLink
                              id="activeDiscover"
                              to="/discover"
                              onClick={(e) => onClickEventNavbar(e.target.id)}
                            >
                              Discover
                            </NavLink>
                          </li>
                          <li
                            className={
                              eventNavbarStates.activeCalender
                                ? "active"
                                : "none"
                            }
                          >
                            <NavLink
                              id="activeCalender"
                              to="/calender"
                              onClick={(e) => onClickEventNavbar(e.target.id)}
                            >
                              Calendar
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <li class="nav-item dropdown">
                <a
                  id="user"
                  rel="nofollow"
                  data-target="#"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="nav-link"
                >
                  <img
                    src="https://d2phdgmkbm5x8b.cloudfront.net/img/us-passport-photo7.png"
                    alt="..."
                    class="avatar rounded-circle"
                  />
                </a>
                <ul aria-labelledby="user" class="user-size dropdown-menu">
                  <li class="welcome">
                    <a href="#" class="edit-profil">
                      <i class="la la-gear"></i>
                    </a>
                    <img
                      src="https://d2phdgmkbm5x8b.cloudfront.net/img/us-passport-photo7.png"
                      alt="..."
                      class="rounded-circle"
                    />
                  </li>
                  <li>
                    <a href="pages-profile.html" class="dropdown-item">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="app-mail.html" class="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dropdown-item no-padding-bottom">
                      Settings
                    </a>
                  </li>
                  <li class="separator"></li>
                  <li>
                    <a
                      href="pages-faq.html"
                      class="dropdown-item no-padding-top"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href="pages-login.html"
                      class="dropdown-item logout text-center"
                    >
                      <i class="ti-power-off"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

VstreamEventNavbar.propTypes = {
  toggling: PropTypes.object.isRequired,
  onClickEventNavbar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { onClickEventNavbar })(
  VstreamEventNavbar
);
