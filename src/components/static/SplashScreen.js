// Component for Splash Screen
import React, { useEffect } from 'react';
import "../../assets/css/splash-screen.css";
import LoginRegister from "../auth/login-register";
import Logo from '../../assets/img/vstream-logo.png';

class SplashScreen extends React.Component {
  render() {
    const style = {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      position: 'fixed'
    };

    return (
      <div >
        <img height="100ox" className='splash-screen-container' src={Logo} />
      </div>
    );
  }
}

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      renderSplashscreen: true
    };
  }
  async componentDidMount() {
    try {
      setTimeout(() => {
        this.setState({ renderSplashscreen: false });
      }, 5000)
    } catch (error) {
      console.log(error);
    }
    // console.log("")
  }

  // apiCallback(data) {
  //   // After getting the API response from server
  //   this.setState({renderSplashscreen: false});
  // }

  render() {
    let view;

    if (this.state.renderSplashscreen)
      return <SplashScreen />;
    else
      return <LoginRegister />;
  }
}

export default MainComponent;
