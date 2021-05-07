import React, { Fragment, useState } from 'react';
import VstreamLogo from '../../assets/img/auth/vStream_logo_white.png';
import GoogleLogo from '../../assets/img/auth/Google.png';
import FacebookLogo from '../../assets/img/auth/Facebook.png';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userAuthentication, userRegistration } from '../../actions/auth';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import Noty from 'noty';
import { SOCIAL_ICONS } from "../../actions/types";

function LoginRegister({
  auth: { isAuthenticated },
  userAuthentication,
  userRegistration,
  history,
}) {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [toggleSignUpGoogle, setToggleSignUpGoogle] = useState(false);
  const [toggleSignUpFb, setToggleSignUpFb] = useState(false);
  const [toggleLoginGoogle, setToggleLoginGoogle] = useState(false);
  const [toggleLoginFb, setToggleLoginFb] = useState(false);


  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [toggleLoader, setToggleLoader] = useState(false);

  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { first_name, last_name, email, password } = registerData;

  const changeSignIn = (e) => {
    e.preventDefault();
    console.log(e.target.name, toggleSignIn);
    if (e.target.name === 'signin') {
      setToggleSignIn(true);
      setToggleSignUpGoogle(false);
      setToggleSignUpFb(false);
    } else {
      setToggleSignIn(false);
      setToggleLoginFb(false);
      setToggleLoginGoogle(false);
    }
  };

  const changeLoginSocial = (e) => {
    e.preventDefault();
    if (e.target.name === 'login-google') {
      setToggleLoginGoogle(!toggleLoginGoogle);
      setToggleLoginFb(false);
    } else {
      setToggleLoginFb(!toggleLoginFb);
      setToggleLoginGoogle(false);
    }
  };

  const changeSignupSocial = (e) => {
    e.preventDefault();
    if (e.target.name === 'signup-google') {
      setToggleSignUpGoogle(!toggleSignUpGoogle);
      setToggleSignUpFb(false);
    } else {
      setToggleSignUpFb(!toggleSignUpFb);
      setToggleSignUpGoogle(false);
    }
  }


  const saveLoginData = (e) => {
    e.preventDefault();

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const saveRegisterData = (e) => {
    e.preventDefault();

    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    setToggleLoader(true);
    let dataForm = new FormData();

    dataForm.append('username', loginData.email);
    dataForm.append('password', loginData.password);

    let check = await userAuthentication(dataForm, history);

    if (check) {
      setToggleLoader(false);
    }

    console.log('Login Button Clicked! ');
  };

  const register = async (e) => {
    e.preventDefault();
    setToggleLoader(true);
    if (registerData.password !== registerData.confirmPassword) {
      new Noty({
        type: 'error',
        layout: 'bottomCenter',
        text: 'Password Not Matched',
        timeout: 1500,
      }).show();
      setToggleLoader(false);
    } else {
      let sendData = {
        first_name,
        last_name,
        email,
        password,
        role: 'Admin',
      };
      let check = await userRegistration(sendData);

      if (check) {
        setToggleLoader(false);
        setToggleSignIn(true);

        setRegisterData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        setToggleLoader(false);
      }
    }

    console.log('Register Button Clicked! ');
  };

  // Redirect If Looged in

  if (localStorage.token) {
    return <Redirect to='/home' />;
  }

  return (
    <Fragment>
      {/* <!-- Begin Preloader --> */}
      {/* <div id="preloader">
        <div className="canvas">
          <img src={Logo} alt="logo" className="loader-logo" />
          <div className="spinner"></div>
        </div>
      </div> */}
      {/* <!-- End Preloader --> */}
      {/* <!-- Begin Container --> */}
      <div className='container-fluid no-padding h-100'>
        <div className='row flex-row h-100 bg-white'>
          {/* <!-- Begin Left Content --> */}
          <div className='col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 no-padding'>
            <div className='elisyam-bg'>
              <div
                className='elisyam-overlay overlay-08 App-background'
              // style={{ background: 'linear-gradient(100deg,#7E47AF 19%,#1A1F63 100%)' }}
              ></div>
              <div className='authentication-col-content-2 mx-auto text-center'>
                <div className='logo-centered'>
                  <Link to='/'>
                    <img src={VstreamLogo} alt='logo' />
                  </Link>
                </div>
                {/* <h1>Welcome To Rent A Car Online Portal!</h1> */}
                {/* <span className="description">
                  Etiam consequat urna at magna bibendum, in tempor arcu
                  fermentum vitae mi massa egestas.
                </span> */}
                <ul
                  className='login-nav nav nav-tabs mt-5 justify-content-center'
                  role='tablist'
                  id='animate-tab'
                >
                  <li name='signin'>
                    <button
                      className={toggleSignIn ? 'btn btn-outline-primary mr-1 mb-2 active' : 'btn btn-outline-primary mr-1 mb-2'}
                      onClick={(e) => changeSignIn(e)}
                      // data-toggle='tab'
                      name='signin'
                      // role='tab'
                      id='singin-tab'
                    // data-easein='zoomInUp'
                    // style={{color:"white"}}
                    // style={toggleLoader ? { pointerEvents: 'none' } : null}
                    >

                      <span name='signin'>
                        Login
                        </span>
                      {/* <i className={SOCIAL_ICONS["Google"]}></i> */}


                    </button>
                    {/* <a
                      className={toggleSignIn ? 'active' : ''}
                      onClick={(e) => changeSignIn(e)}
                      data-toggle='tab'
                      href='!#'
                      name='signin'
                      role='tab'
                      id='singin-tab'
                      data-easein='zoomInUp'
                    >
                      Login
                    </a> */}
                  </li>
                  <li name='signup'>
                    <button
                      className={toggleSignIn ? 'btn btn-outline-primary mr-1 mb-2' :
                        'btn btn-outline-primary mr-1 mb-2 active'}
                      onClick={(e) => changeSignIn(e)}
                      name='signup'
                      // role='tab'
                      id='signup-tab'
                    // data-easein='zoomInRight'
                    // style={{color:"white"}}
                    // style={toggleLoader ? { pointerEvents: 'none' } : null}
                    >
                      <span name='signup'>
                        Create Account
                        </span>
                      {/* <i className={SOCIAL_ICONS["Google"]}></i> */}


                    </button>
                    {/* <a
                      className={toggleSignIn ? '' : 'active'}
                      onClick={(e) => changeSignIn(e)}
                      data-toggle='tab'
                      href='!#'
                      name='signup'
                      role='tab'
                      id='signup-tab'
                      data-easein='zoomInRight'
                    >
                      Create Account
                    </a> */}
                  </li>
                </ul>
                {toggleSignIn ?
                  <ul
                    className='login-nav nav nav-tabs mt-5 justify-content-center'
                    role='tablist'
                    id='animate-tab'
                  >
                    <li>
                      <button
                        onClick={(e) => changeLoginSocial(e)}
                        className={toggleLoginGoogle ? 'btn btn-outline-primary mr-1 mb-2 active' :
                          'btn btn-outline-primary mr-1 mb-2'}
                        data-toggle='tab'
                        name='login-google'
                        role='tab'
                        id='login-google'
                        data-easein='zoomInUp'
                      // style={{color:"white"}}
                      // style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span>
                          Login With Google
                        </span>
                        <i className={SOCIAL_ICONS["Google"]}></i>


                      </button>
                      {/* <a
                        className={toggleLoginGoogle ? 'active' : ''}
                        onClick={(e) => changeLoginSocial(e)}
                        data-toggle='tab'
                        href='!#'
                        name='login-google'
                        role='tab'
                        id='login-google'
                        data-easein='zoomInUp'
                      >
                        Login With Google
                      <img src={GoogleLogo} style={{ width: "20px", height: "20px", marginLeft: "10px" }}></img>
                      </a> */}

                    </li>
                    <li>
                      <button
                        onClick={(e) => changeLoginSocial(e)}
                        className={toggleLoginFb ? 'btn btn-outline-primary mr-1 mb-2 active' :
                          'btn btn-outline-primary mr-1 mb-2'}
                        data-toggle='tab'
                        name='login-facebook'
                        role='tab'
                        id='login-facebook'
                        data-easein='zoomInRight'
                      // style={{color:"white"}}
                      // style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span>
                          Login With Facebook
                        </span>
                        <i className={SOCIAL_ICONS["Facebook"]}></i>


                      </button>
                      {/* <a
                        className={toggleLoginFb ? 'active' : ''}
                        onClick={(e) => changeLoginSocial(e)}
                        data-toggle='tab'
                        href='!#'
                        name='login-facebook'
                        role='tab'
                        id='login-facebook'
                        data-easein='zoomInRight'
                      >
                        Login With Facebook
                      <img src={FacebookLogo} style={{ width: "20px", height: "20px", marginLeft: "10px" }}></img>
                      </a> */}
                    </li>
                  </ul>
                  :
                  <ul
                    className='login-nav nav nav-tabs mt-5 justify-content-center'
                    role='tablist'
                    id='animate-tab'
                  >
                    <li>
                      <button
                        onClick={(e) => changeSignupSocial(e)}
                        className={toggleSignUpGoogle ? 'btn btn-outline-primary mr-1 mb-2 active' : 'btn btn-outline-primary mr-1 mb-2'}
                        data-toggle='tab'
                        name='signup-google'
                        // role='tab'
                        id='singup-google'
                      // data-easein='zoomInUp'
                      // style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span>
                          Sign Up Via Google
                        </span>
                        <i className={SOCIAL_ICONS["Google"]}></i>


                      </button>
                      {/* <a
                        className={toggleSignUpGoogle ? 'active' : ''}
                        onClick={(e) => changeSignupSocial(e)}
                        data-toggle='tab'
                        href='!#'
                        name='signup-google'
                        role='tab'
                        id='singup-google'
                        data-easein='zoomInUp'
                      >
                        Sign Up Via Google
                      <img src={GoogleLogo} style={{ width: "20px", height: "20px", marginLeft: "10px" }}></img>
                      </a> */}

                    </li>
                    <li>
                      <button
                        onClick={(e) => changeSignupSocial(e)}
                        className={toggleSignUpFb ? 'btn btn-outline-primary mr-1 mb-2 active' :
                          'btn btn-outline-primary mr-1 mb-2'}
                        data-toggle='tab'
                        name='signup-facebook'
                        role='tab'
                        id='signup-facebook'
                        data-easein='zoomInRight'
                      // style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span>
                          Sign Up Via Facebook
                        </span>
                        <i className={SOCIAL_ICONS["Facebook"]}></i>


                      </button>
                      {/* <a
                        className={toggleSignUpFb ? 'active' : ''}
                        onClick={(e) => changeSignupSocial(e)}
                        data-toggle='tab'
                        href='!#'
                        name='signup-facebook'
                        role='tab'
                        id='signup-facebook'
                        data-easein='zoomInRight'
                      >

                        Sign Up Via Facebook
                        <i className={SOCIAL_ICONS["Facebook"]}></i>
                        <img src={FacebookLogo} style={{ width: "20px", height: "20px", marginLeft: "10px" }}></img>
                      </a> */}
                    </li>
                  </ul>
                }

              </div>
            </div>
          </div>
          {/* <!-- End Left Content --> */}
          {/* <!-- Begin Right Content --> */}
          <div className='col-xl-9 col-lg-7 col-md-7 col-sm-12 col-12 my-auto no-padding'>
            {/* <!-- Begin Form --> */}
            <div className='authentication-form-2 mx-auto has-shadow p-5'>
              <div className='tab-content' id='animate-tab-content'>
                {/* <!-- Begin Sign In --> */}
                <div
                  role='tabpanel'
                  className={
                    toggleSignIn
                      ? 'tab-pane show active animated zoomIn'
                      : 'tab-pane'
                  }
                  id='singin'
                  aria-labelledby='singin-tab'
                >
                  <h3>Sign In To Vstream</h3>
                  <form onSubmit={(e) => login(e)}>
                    <div className='group material-input'>
                      <input
                        type='text'
                        name='email'
                        value={loginData.email}
                        onChange={(e) => saveLoginData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Email</label>
                    </div>
                    <div className='group material-input'>
                      <input
                        type='password'
                        name='password'
                        value={loginData.password}
                        onChange={(e) => saveLoginData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Password</label>
                    </div>
                    <div className='row'>
                      {/* <div className='col text-left'>
                        <div className='styled-checkbox'>
                          <input type='checkbox' name='checkbox' id='remeber' />
                          <label htmlFor='remeber'>Remember me</label>
                        </div>
                      </div> */}
                      {/* <div className='col text-right'>
                        <a href='pages-forgot-password.html'>
                          Forgot Password ?
                        </a>
                      </div> */}
                    </div>
                    <div className='sign-btn text-center'>
                      <button
                        onClick={(e) => login(e)}
                        className='btn btn-lg btn-gradient-01'
                        style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span
                          style={toggleLoader ? { marginRight: '10px' } : null}
                        >
                          Sign In
                        </span>
                        {/* <Icofont icon='spinner' size='3' spin='true' /> */}
                        {toggleLoader ? (
                          // <Loader
                          //   type='Oval'
                          //   color='white'
                          //   height={20}
                          //   width={20}
                          //   // timeout={3000} //3 secs
                          //   // visible={toggleLoader ? true : false}
                          // />
                          <Icofont icon='spinner' size='3' spin='true' />
                        ) : null}
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- End Sign In --> */}
                {/* <!-- Begin Sign Up --> */}
                <div
                  role='tabpanel'
                  className={
                    toggleSignIn
                      ? 'tab-pane'
                      : 'tab-pane show active animated zoomIn'
                  }
                  id='signup'
                  aria-labelledby='signup-tab'
                >
                  <h3>Create An Account</h3>
                  <form onSubmit={(e) => register(e)}>
                    {/* <div className='group material-input'>
                      <input
                        type='text'
                        name='first_name'
                        value={registerData.first_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>First Name</label>
                    </div>
                    <div className='group material-input'>
                      <input
                        type='text'
                        name='last_name'
                        value={registerData.last_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Last Name</label>
                    </div> */}
                    <div className='group material-input'>
                      <input
                        type='text'
                        name='last_name'
                        value={registerData.last_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>User Name</label>
                    </div>
                    <div className='group material-input'>
                      <input
                        type='email'
                        name='email'
                        value={registerData.email}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Email</label>
                    </div>
                    
                    {/* <div className='group material-input'>
                      <input
                        type='text'
                        name='last_name'
                        value={registerData.last_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Date OF Birth</label>
                    </div> */}
                    {/* <div className='group material-input'>
                      <input
                        type='text'
                        name='last_name'
                        value={registerData.last_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Display Name</label>
                    </div> */}
                    {/* <div className='group material-input'>
                      <input
                        type='text'
                        name='last_name'
                        value={registerData.last_name}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Short Bio</label>
                    </div> */}
                    <div className='group material-input'>
                      <input
                        type='password'
                        name='password'
                        value={registerData.password}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Password</label>
                    </div>
                    <div className='group material-input'>
                      <input
                        type='password'
                        name='confirmPassword'
                        value={registerData.confirmPassword}
                        onChange={(e) => saveRegisterData(e)}
                        required
                      />
                      <span className='highlight'></span>
                      <span className='bar'></span>
                      <label>Confirm Password</label>
                    </div>
                    {/* <div className='row'>
                      <div className='col text-left'>
                        <div className='styled-checkbox'>
                          <input type='checkbox' name='checkbox' id='agree' />
                          <label htmlFor='agree'>
                            I Accept <Link to='/'>Terms and Conditions</Link>
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className='sign-btn text-center'>
                      <button
                        onClick={(e) => register(e)}
                        className='btn btn-lg btn-gradient-01'
                        style={toggleLoader ? { pointerEvents: 'none' } : null}
                      >
                        <span
                          style={toggleLoader ? { marginRight: '10px' } : null}
                        >
                          Sign Up
                        </span>
                        {/* <Icofont icon='spinner' size='3' spin='true' /> */}
                        {toggleLoader ? (
                          // <Loader
                          //   type='Oval'
                          //   color='white'
                          //   height={20}
                          //   width={20}
                          //   // timeout={3000} //3 secs
                          //   // visible={toggleLoader ? true : false}
                          // />
                          <Icofont icon='spinner' size='3' spin='true' />
                        ) : null}
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- End Sign Up --> */}
              </div>
            </div>
            {/* <!-- End Form -->                         */}
          </div>
          {/* <!-- End Right Content --> */}
        </div>
        {/* <!-- End Row --> */}
      </div>
    </Fragment>
  );
}

LoginRegister.propTypes = {
  userAuthentication: PropTypes.func.isRequired,
  userRegistration: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  userAuthentication,
  userRegistration,
})(withRouter(LoginRegister));
