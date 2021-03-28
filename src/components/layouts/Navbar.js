import React, { useState, useEffect, Fragment } from 'react'; // useState
import Logo from '../../assets/img/vstream-logo.png';
// import Notification01 from '../../assets/img/notifications/01.jpg';
// import Avatar01 from '../../assets/img/avatar/avatar-01.jpg';
import '../../assets/css/navbar.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { toggleNavbar } from '../../actions/toggling';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import Notification from '../../assets/icons/notification.png'

function Navbar({
  toggling: { toggleNavbarBurger },
  toggleNavbar,
  logout,
  auth: { userDetail },
}) {
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateNoti, setToggleStateNoti] = useState(false);

  // console.log(toggleState);

  const changeToggle = (e) => {
    e.preventDefault();
    toggleNavbar();
  };

  const logOut = (e) => {
    e.preventDefault();

    logout();

    console.log('Logout Button Clicked');
  };

  const toggleDropDown = (e) => {
    e.preventDefault();
    console.log("this is toggle..")
    if (e.target.id == "notifications") {
      setToggleStateNoti(!toggleStateNoti)
      setToggleState(false);
    } else {
      setToggleState(!toggleState);
      setToggleStateNoti(false);
    }
  };

  return (
    <div>
      <header className='header'>
        <nav className='navbar fixed-top'>
          {/* <!-- Begin Search Box--> */}
          {/* <div className='search-box'>
            <button className='dismiss'>
              <i className='ion-close-round'></i>
            </button>
            <form id='searchForm' action='#' role='search'>
              <input
                type='search'
                placeholder='Search something ...'
                className='form-control'
              />
            </form>
          </div> */}
          {/* <!-- End Search Box--> */}
          {/* <!-- Begin Topbar --> */}
          <div className='navbar-holder d-flex align-items-center align-middle justify-content-between'>
            {/* <!-- Begin Logo --> */}
            <div className='navbar-header'>
              <Link to='/dashboard' className='navbar-brand'>
                <div className='brand-image brand-big'>
                  <img src={Logo} alt='logo' className='logo-big' />
                </div>
                <div className='brand-image brand-small'>
                  <img src={Logo} alt='logo' className='logo-small' />
                </div>
              </Link>
              {/* <!-- Toggle Button --> */}
              <a
                id='toggle-btn'
                href='!#'
                className={toggleNavbarBurger ? 'menu-btn active' : 'menu-btn'}
                onClick={(e) => changeToggle(e)}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              {/* <!-- End Toggle --> */}
            </div>
            {/* <!-- End Logo --> */}
            {/* <!-- Begin Navbar Menu --> */}
            <div
              className='nav-menu list-unstyled d-flex flex-md-row 
              align-items-md-center pull-right'>
              <li>
                <Dropdown as='ul'>
                  <Dropdown.Toggle id="notification-dropdown" as='b' className='nav-link remove-caret'>
                    <img src={Notification} height="30px"></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className='text-center' href='!#not'>
                      Notification 1
                    </Dropdown.Item>
                    <Dropdown.Item className='text-center' href='!#123'>
                      Notification 2
                    </Dropdown.Item>
                    <Dropdown.Item className='text-center' href='!#456'>
                      Notification 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Dropdown as='ul'>
                  <Dropdown.Toggle as='b' id="username-dropdown" className='nav-link remove-caret'>
                    {userDetail !== null ? (
                      <span>
                        {userDetail.name}
                      </span>
                    ) : (
                      <span>Username</span>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => logOut(e)}
                      href="!#">Logout</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </div>
            {/* <Dropdown
              as='ul'
              className='nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right'
            >

              <li>
                <Dropdown.Toggle as='b' id='notifications'
                  className='nav-link remove-caret'
                  onClick={(e) => toggleDropDown(e)}>
                  <img src={Notification} height="30px"></img>
                </Dropdown.Toggle>

                <Dropdown.Menu as='ul'
                  className='user-size'
                >
                  <li>
                    <Dropdown.Item className='text-center' href='!#not'>
                      Notification 1
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item className='text-center' href='!#123'>
                      Notification 2
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item className='text-center' href='!#456'>
                      Notification 3
                    </Dropdown.Item>
                  </li>
                </Dropdown.Menu>

              </li>
              <li>
                <Dropdown.Toggle as='a' className='nav-link remove-caret'>
                  <img
                    src={Notification}
                    alt='...'
                    className='avatar rounded-circle'
                  />
                  {userDetail !== null ? (
                    <span>
                      {userDetail.name}
                    </span>
                  ) : (
                    <span>Username</span>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu as='ul' className='user-size dropdown-menu'>
                  <li onClick={(e) => logOut(e)}>
                    <Dropdown.Item className='text-center' href='!#'>
                      Logout
                    </Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </li>

            </Dropdown> */}

            {/* <ul className='nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right'>

              <li className='nav-item dropdown'>
                <a
                  id='user'
                  rel='nofollow'
                  data-target='#'
                  href='!#'
                  onClick={(e) => toggleDropDown(e)}
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='true'
                  className='nav-link remove-caret'
                >
                  <img
                    src={Notification}
                    alt='...'
                    className='avatar rounded-circle'
                  />
                </a>
                <ul
                  aria-labelledby='user'
                  className={
                    toggleState
                      ? 'user-size dropdown-menu animated slideInDown show'
                      : 'user-size dropdown-menu'
                  }
                >
                  <li className='welcome'>
                    <img src={Notification} width="20px" alt='...' className='rounded-circle' />
                    
                  </li>
                  <li>
                    <a
                      rel='nofollow'
                      onClick={(e) => logOut(e)}
                      className='dropdown-item logout text-center'
                    >
                      <i className='ti-power-off'></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  id='notifications'
                  rel='nofollow'
                  data-target='#'
                  href='!#'
                  onClick={(e) => toggleDropDown(e)}
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='true'
                  className='nav-link remove-caret'
                >
                  {userDetail !== null ? (
                      <span>
                        {userDetail.name}
                      </span>
                    ) : (
                      <span>Username</span>
                    )}
                  <img
                    src={Notification}
                    alt='...'
                    className='avatar rounded-circle'
                  />
                </a>
                <ul
                  aria-labelledby='user'
                  className={
                    toggleStateNoti
                      ? 'user-size dropdown-menu show'
                      : 'user-size dropdown-menu'
                  }
                >
                  <li className='welcome'>
                    <img src={Notification} alt='...' className='rounded-circle' />
                  </li>
                  <li>
                    <a
                      rel='nofollow'
                      onClick={(e) => logOut(e)}
                      className='dropdown-item logout text-center'
                    >
                      <i className='ti-power-off'></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul> */}
            {/* <!-- End Navbar Menu --> */}
          </div>
          {/* <!-- End Topbar --> */}
        </nav>
      </header>

      <Sidebar toggle={toggleNavbarBurger} />
    </div>
  );
}

Navbar.propTypes = {
  toggling: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
  auth: state.auth,
});

export default connect(mapStateToProps, { toggleNavbar, logout })(Navbar);
