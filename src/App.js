import logo from './logo.svg';
import './App.css';
import MainComponent from "./components/static/SplashScreen";
import LoginRegister from './components/auth/login-register';
import Dashboard from "./components/dashboard";
import Conversation from "./components/conversation/conversation-main"
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layouts/Navbar';


function App() {
  const LoginContainer = () => (
    <div>
      <Route exact path='/' component={MainComponent}></Route>
    </div>
  );
  const DefaultContainer = () => (
    <div>
      <Navbar />
      <PrivateRoute
        exact
        path='/dashboard'
        component={Dashboard}
      ></PrivateRoute>
      {/* <PrivateRoute
        // exact
        path='/detailCourse/:id'
        component={DetailCourse}
      ></PrivateRoute> */}
      <PrivateRoute
        exact
        path='/dashboard/conversation'
        component={Conversation}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/account'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/notifications'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/privacy'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/invite-freinds'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/community-guide'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/contact-support'
        component={Dashboard}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path='/dashboard/about'
        component={Dashboard}
      ></PrivateRoute>
    </div>
  );
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LoginContainer}></Route>
            <Route
              exact
              path='/(dashboard)'
              component={DefaultContainer}
            ></Route>
            <Route
              exact
              path='/(dashboard)/(conversation)'
              component={DefaultContainer}
            ></Route>
            <Route
              exact
              path='/(dashboard)'
              component={DefaultContainer}
            ></Route>
            <Route
              exact
              path='/(dashboard)'
              component={DefaultContainer}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
