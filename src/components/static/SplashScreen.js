// Component for Splash Screen
import React, { useEffect } from 'react';

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
            <img src={'IMAGE-URL'} style={style} />
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
            this.setState({renderSplashscreen: false});
          }, 1000)
        } catch (error) {
          console.log(error);
        }
      }
  
    // apiCallback(data) {
    //   // After getting the API response from server
    //   this.setState({renderSplashscreen: false});
    // }
  
    render() {
      let view;
  
      if(this.state.renderSplashscreen)
        return <SplashScreen/>;
      else
        return null;
    }
  }

export default MainComponent;
