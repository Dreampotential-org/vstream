// Component for Splash Screen
import React from 'react';
import "../../assets/css/splash-screen.css";
import LoginRegister from "../auth/login-register";
import Logo from '../../assets/img/vstream-logo.png';

class SplashScreen extends React.Component {
  render() {


    return (
      // <div >
      //   <img height="100ox" className='splash-screen-container' src={Logo} />
      // </div>
      <div id="preloader" style={{ display: "block" }}>
        <div className="canvas">
          <img src={Logo} alt="logo" className="loader-logo" />
          <div className="spinner"></div>
        </div>
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

    if (this.state.renderSplashscreen)
      return <SplashScreen />;
    else
      return <LoginRegister />;
  }
}

export default MainComponent;
