import React from 'react';
import { NavLink } from 'react-router-dom';
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

function Sidebar({ toggle }) {

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
            <li>
                <NavLink
                  activeClassName='active'
                  to='/home'
                >
                  <i className='la la-home'>
                  </i>
                  <span style={{ display: 'block !important' }}>
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
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
              </li>
              <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/conversation'
                >
                  <i className='la la-play-circle'>
                  </i>
                  <span style={{ display: 'block !important' }}>
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
              <li>
                <NavLink
                  activeClassName='active'
                  to='/dashboard/community'
                >
                  <i className='la la-comment'></i>
                  <span style={{ display: 'block !important' }}>
                    Community
                  </span>
                </NavLink>
              </li>
              <li>
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
              <li>
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
              <li>
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
              <li>
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

export default Sidebar;
