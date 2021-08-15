import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "../../assets/icons/navbar/vstream_event.png";
import { Link, NavLink } from "react-router-dom";
import { onClickEventNavbar } from "../../actions/toggling";

function VstreamEventNavbar({
  toggling: { eventNavbarStates },
  onClickEventNavbar,
}) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-holder d-flex align-items-center align-middle justify-content-between">
            <div className="navbar-header">
              <Link to="/event/spotlight" className="navbar-brand">
                <div className="brand-image brand-big">
                  <img
                    src={Logo}
                    alt="logo"
                    className="logo-big"
                  />
                </div>
                <div className="brand-image brand-small">
                  <img src={Logo} alt="logo" className="logo-small" />
                </div>
              </Link>
            </div>

            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
              <div className="horizontal-menu">
                <div className="container">
                  <div className="row">
                    <nav className="navbar navbar-light navbar-expand-lg main-menu">
                      <button
                        className="navbar-toggler"
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
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav mr-auto ">
                          <li
                            className={
                              eventNavbarStates.activeSpotlight
                                ? "active"
                                : "none"
                            }
                          >
                            <NavLink
                              id="activeSpotlight"
                              to="/event/spotlight"
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
                              to="/event/discover"
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
                              to="/event/calender"
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

              <li className="nav-item dropdown">
                <a
                  id="user"
                  rel="nofollow"
                  data-target="#"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <img
                    src="https://d2phdgmkbm5x8b.cloudfront.net/img/us-passport-photo7.png"
                    alt="..."
                    className="avatar rounded-circle"
                  />
                </a>
                <ul aria-labelledby="user" className="user-size dropdown-menu">
                  <li className="welcome">
                    <a href="#" className="edit-profil">
                      <i className="la la-gear"></i>
                    </a>
                    <img
                      src="https://d2phdgmkbm5x8b.cloudfront.net/img/us-passport-photo7.png"
                      alt="..."
                      className="rounded-circle"
                    />
                  </li>
                  <li>
                    <a href="pages-profile.html" className="dropdown-item">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="app-mail.html" className="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item no-padding-bottom">
                      Settings
                    </a>
                  </li>
                  <li className="separator"></li>
                  <li>
                    <a
                      href="pages-faq.html"
                      className="dropdown-item no-padding-top"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href="pages-login.html"
                      className="dropdown-item logout text-center"
                    >
                      <i className="ti-power-off"></i>
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
