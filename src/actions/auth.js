import {
    LOGIN_SUCCESS,
    API_ENDPOINT,
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOGIN_FAIL,
  } from './types';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';
import Noty from 'noty';
  
  // Load User
  
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // const res = await axios.get(`${API_ENDPOINT}/getUser/`);
    const res = {
      "name": "Muhammad Hammad"
    }
    dispatch({
      type: USER_LOADED,
      payload: {
        "name": "Muhammad Hammad"
      },
    });

    // dispatch({
    //   type: USER_LOADED,
    //   payload: res.data,
    // });
  } catch (error) {
    console.log('user loaded error: ', error);
    dispatch({
      type: AUTH_ERROR,
    });

    // history.push('/');
  }
};

// Login User

export const userAuthentication = (authData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const body = authData;

  //   const params = new URLSearchParams();
  //   params.append('email', email);
  //   params.append('password', password);

  try {
    const res = await axios.post(`${API_ENDPOINT}/s3_uploader/user/login`, body, config);

    console.log('Token Response', res.data);
    // if (res.data.access_token !== 'undefined') {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());

    history.push('/home');
    //}

    return true;

    // console.log(res.data.Token);

    //dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;

    console.log('Login Error: ', err);

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    dispatch({
      type: LOGIN_FAIL,
    });

    new Noty({
      type: 'error',
      layout: 'bottomCenter',
      text: "Network Error!",
      timeout: 300000,
    }).show();

    return true;
  }
};

// Register User

export const userRegistration = (signUpData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const body = signUpData;

  //   const params = new URLSearchParams();
  //   params.append('email', email);
  //   params.append('password', password);

  try {
    const res = await axios.post(`${API_ENDPOINT}/signup/`, body, config);

    console.log('User Registeration Response', res.data);
    // if (res.data.access_token !== 'undefined') {
    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: res.data,
    //   });
    //   dispatch(loadUser());

    new Noty({
      type: 'success',
      layout: 'bottomCenter',
      text: 'Registration Successfull',
      timeout: 1500,
    }).show();

    //   history.push('/dashboard');
    //}

    return true;

    // console.log(res.data.Token);

    //dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;

    console.log('User Register Error: ', err.response.data);

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    //   dispatch({
    //     type: LOGIN_FAIL,
    //   });

    new Noty({
      type: 'error',
      layout: 'bottomCenter',
      text: err.response.data.description,
      timeout: 1500,
    }).show();

    return false;
  }
};

// Log Out

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = {
    id: localStorage.getItem('id'),
  };

  try {
    dispatch({
      type: LOG_OUT,
    });
    const res = await axios.post(`${API_ENDPOINT}/logout/`, body, config);

    console.log('Logout Response', res.data);
  } catch (err) {
    console.log('Logout Error: ', err);

    dispatch({
      type: AUTH_ERROR,
    });
  }

  //   try {
  //     dispatch({
  //       type: LOG_OUT,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: AUTH_ERROR,
  //     });
  //   }
};
