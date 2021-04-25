import React, { useState, useEffect, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../assets/css/sidebar.css';
import About from "../../assets/icons/sidebar/sidebar_about.png";
import Categories from "../../assets/icons/sidebar/sidebar_categories.png";
import Community from "../../assets/icons/sidebar/sidebar_community.png";
import Guidelines from "../../assets/icons/sidebar/sidebar_guidelines.png";
import Hide from "../../assets/icons/sidebar/sidebar_hide.png";
import Home from "../../assets/icons/sidebar/sidebar_home.png";
import InviteFreinds from "../../assets/icons/sidebar/sidebar_invite_friends.png";
import PrivacySecurity from "../../assets/icons/sidebar/sidebar_privacy&security.png";
import ShowTime from "../../assets/icons/sidebar/sidebar_showtime.png";
// import PropTypes from 'prop-types'
import { clickSidebarItems } from '../../actions/toggling';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ICON_DICT_OF_CATEGORY } from '../../actions/types'

var iconDictOfCategory = {
  "Art & Design": "la la-pencil-ruler",
  "Business": "la la-briefcase",
  "Entertainment": "la la-film",
  "Fashion": "la la-tshirt",
  "Food": "la la-hamburger",
  "Games": "la la-gamepad",
  "Life": "la la-hand-holding-heart",
  "Music": "la la-music",
  "News": "la la-readme",
  "Social": "la la-users",
  "Travel": "la la-plane-departure",
  "All": "la la-check-circle"
}

function Sidebar(
  { toggling: { sidebarStates }, toggle,
    conversation, clickSidebarItems }
) {
  // const [toggleStateDropdown, setToggleStateDropdown] = useState(false);
  // const [clickSideBar, setClickSidebar] = useState(false);
  // const showCategories = (e) => {
  //   e.preventDefault();
  //   setToggleStateDropdown(!toggleStateDropdown);
  // }
  const onActiveItems = (e) => {
    // console.log(e.target.id);
    clickSidebarItems(e.target.id)
  }

  return (
    <div>
      <div className='page-content d-flex align-items-stretch'>
        <div className='default-sidebar'>
          {/* <!-- Begin Side Navbar --> */}
          <nav
            className={
              toggle
                ? 'side-navbar box-scroll sidebar-scroll'
                : 'side-navbar box-scroll sidebar-scroll shrinked'
            }
          >
            {/* <!-- Begin Main Navigation --> */}
            <ul className='list-unstyled'>
              <li
                className={sidebarStates.activeHome ? 'active' : "none"}
              >
                <NavLink
                  // className='active'
                  // onClick={clickSidebarItems("ACTIVE_HOME")}
                  id="activeHome"
                  onClick={onActiveItems}
                  // onClick = { clickSidebarItems("ACTIVE_HOME") }
                  to='/home'
                >
                  <i className='la la-home' id="activeHome">
                  </i>
                  <span id="activeHome" style={{ display: 'block !important' }}>
                    Home
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/feed/categories'
                >
                  <i className='la la-star'>
                  </i>
                  <span style={{ display: 'block !important' }}>
                    Categories
                  </span>
                </NavLink>
              </li> */}
              <li id="activeCategory">

                <a aria-expanded={sidebarStates.activeCategory ? "true" : "false"}
                  data-toggle="collapse" onClick={onActiveItems} id="activeCategory">

                  <i className="la la-star"></i>
                  <span id="activeCategory">Categories</span></a>


                {
                  conversation.categories !== null ?
                    <ul id="dropdown-app" className="collapse list-unstyled pt-0"
                      style={{ display: sidebarStates.activeCategory ? "block" : 'none' }}>
                      {conversation.categories.map((cat, i) => (
                        // <SwiperSlide key={i}>{cat.category}</SwiperSlide>
                        <li key={i}>
                          <Link
                            to={'/feed/categories/' + cat.category}
                          >
                            {/* {console.log(iconDictOfCategory[cat.category])} */}
                            <i className={ICON_DICT_OF_CATEGORY[cat.category]}>
                            </i>
                            <span id={cat.category}
                              style={{ display: 'block !important' }}>{cat.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul> : null
                }

                {/* <li><a href="app-calendar.html">Calendar</a></li>
                  <li><a href="app-chat.html">Chat</a></li>
                  <li><a href="app-mail.html">Mail</a></li>
                  <li><a href="app-contact.html">Contact</a></li> */}


              </li>
              {/* <li><a href="#dropdown-app" aria-expanded="false" data-toggle="collapse">
                <i class="la la-puzzle-piece"></i><span>Applications</span></a>
                <ul id="dropdown-app" class="collapse list-unstyled pt-0">
                  <li><a href="app-calendar.html">Calendar</a></li>
                  <li><a href="app-chat.html">Chat</a></li>
                  <li><a href="app-mail.html">Mail</a></li>
                  <li><a href="app-contact.html">Contact</a></li>
                </ul>
              </li> */}
              <li
                className={sidebarStates.activeShowTime ? 'active' : "none"}>
                <NavLink
                  // activeClassName='active'
                  id="activeShowTime"
                  onClick={onActiveItems}
                  to='/dashboard/conversation'
                >
                  <i className='la la-play-circle' id="activeShowTime">
                  </i>
                  <span id="activeShowTime" style={{ display: 'block !important' }}>
                    Show Time
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/conversation'
                >
                  <i className='la la-home'>
                  </i>
                  <span style={{ display: 'block !important' }}>
                    Start Conversation
                  </span>
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/follow'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span style={{ display: 'block !important' }}>
                    Follow Peoples
                  </span>
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/notifications'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span style={{ display: 'block !important' }}>
                    Notifications
                  </span>
                </NavLink>
              </li> */}
              <li id="activeCommunity">
                <NavLink
                  onClick={onActiveItems}
                  // activeClassName='active'
                  to='/dashboard/community'
                >
                  <i className='la la-comment'></i>
                  <span style={{ display: 'block !important' }}>
                    Community
                  </span>
                </NavLink>
              </li>
              <li id="activePrivacy">
                <NavLink
                  activeClassName='active'
                  to='/dashboard/privacy'
                >
                  <i className='la la-lock'></i>
                  <span style={{ display: 'block !important' }}>
                    Privacy & Security
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/invite-freinds'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span style={{ display: 'block !important' }}>
                    Invite Freinds
                  </span>
                </NavLink>
              </li> */}
              <li id="activeGuidelines">
                <NavLink
                  activeClassName='active'
                  to='/dashboard/guidelines'
                >
                  <i className='la la-list-ul'></i>
                  <span style={{ display: 'block !important' }}>
                    Guidelines
                  </span>
                </NavLink>
              </li>
              <li id="activeSupport">
                <NavLink
                  activeClassName='active'
                  to='/dashboard/contact-support'
                >
                  <i className='la la-envelope'></i>
                  <span style={{ display: 'block !important' }}>
                    Contact Support
                  </span>
                </NavLink>
              </li>
              <li id="activeAbout">
                <NavLink
                  activeClassName='active'
                  to='/dashboard/about'
                >
                  <i className='la la-info'></i>
                  <span style={{ display: 'block !important' }}>
                    About
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/create-booking'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span>Category Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/create-booking'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span>Quiz Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/create-booking'
                >
                  <i className='la la-puzzle-piece'></i>
                  <span>Lesson Management</span>
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink activeClassName='active' to='/dashboard/add-car'>
                  <i className='la la-puzzle-piece'></i>
                  <span>Add Driver</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/dashboard/add-car'>
                  <i className='la la-puzzle-piece'></i>
                  <span>Add Client</span>
                </NavLink>
              </li> */}
              {/* <li><a href="!#" aria-expanded="false" data-toggle="collapse"><i className="la la-puzzle-piece"></i><span>Dropdown</span></a>
                                <ul id="dropdown" className="collapse list-unstyled pt-0">
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                </ul>
                            </li> */}
            </ul>
            {/* <span className="heading">Title</span>
                        <ul className="list-unstyled">
                            <li className="active"><a href="!#" aria-expanded="true" data-toggle="collapse"><i className="la la-columns"></i><span>Active</span></a>
                                <ul id="dropdown-db" className="collapse list-unstyled show pt-0">
                                    <li><a className="active" href="!#">Active</a></li>
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                    <li><a href="!#">Link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-unstyled">
                            <li><a href="!#"><i className="la la-angle-left"></i><span>Back To Elisyam</span></a></li>
                        </ul> */}
            {/* <!-- End Main Navigation --> */}
          </nav>
          {/* <!-- End Side Navbar --> */}
        </div>
      </div>
    </div>
  );
}

// Sidebar.propTypes = {

// }
Sidebar.propTypes = {
  toggling: PropTypes.object.isRequired,
  conversation: PropTypes.object.isRequired,
  clickSidebarItems: PropTypes.func.isRequired,
  // changeView: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  conversation: state.conversation,
});
export default connect(mapStateToProps, { clickSidebarItems })(
  Sidebar
);
// export default Sidebar;
