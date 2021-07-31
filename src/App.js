import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/static/SplashScreen";
import LoginRegister from "./components/auth/login-register";
import Home from "./components/home/home-main";
import CategoryMain from "./components/category/category-main";
import Conversation from "./components/conversation/conversation-main";
import FollowPeoples from "./components/following/follow-card";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Navbar from "./components/layouts/Navbar";
import ShowTime from "./components/show-time/show-time-main";
import LiveStreaming from "./components/show-time/live-streaming";
import ChatBox from "./components/show-time/chatbox";
import VstreamEventNavbar from "./components/vstream-events/navbar";
import VstreamEventFooter from "./components/vstream-events/footer";
import Spotlight from "./components/vstream-events/spotlight/spotlight";

function App() {
  const LoginContainer = () => (
    <div>
      <Route exact path="/" component={MainComponent}></Route>
    </div>
  );
  const DefaultContainer = () => (
    <div>
      <Navbar />
      <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
      <PrivateRoute
        exact
        path="/feed/categories/:id"
        component={CategoryMain}
      ></PrivateRoute>
      {/* <PrivateRoute
        // exact
        path='/detailCourse/:id'
        component={DetailCourse}
      ></PrivateRoute> */}
      <PrivateRoute exact path="/show/:id" component={ShowTime}></PrivateRoute>

      <PrivateRoute exact path="/live" component={LiveStreaming}></PrivateRoute>
      <PrivateRoute exact path="/chat" component={ChatBox}></PrivateRoute>

      <PrivateRoute
        exact
        path="/dashboard/follow"
        component={FollowPeoples}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/notifications"
        component={CategoryMain}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/privacy"
        component={CategoryMain}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/invite-freinds"
        component={CategoryMain}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/community-guide"
        component={CategoryMain}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/contact-support"
        component={CategoryMain}
      ></PrivateRoute>
      <PrivateRoute
        exact
        path="/dashboard/about"
        component={CategoryMain}
      ></PrivateRoute>
    </div>
  );
  const vstreamEventsContainer = () => (
    <div className="page db-modern">
      <VstreamEventNavbar />
      <PrivateRoute
        exact
        path="/spotlight"
        component={Spotlight}
      ></PrivateRoute>
      <VstreamEventFooter />
    </div>
  );
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginContainer}></Route>
            <Route exact path="/(home)" component={DefaultContainer}></Route>
            <Route
              exact
              path="/(feed)/(categories)/:id"
              component={DefaultContainer}
            ></Route>
            <Route
              exact
              path="/(show)/:id"
              component={DefaultContainer}
            ></Route>
            <Route exact path="/(live)" component={DefaultContainer}></Route>
            <Route
              exact
              path="/(spotlight)"
              component={vstreamEventsContainer}
            ></Route>
            <Route exact path="/(chat)" component={DefaultContainer}></Route>
            <Route
              exact
              path="/(dashboard)/(follow)"
              component={DefaultContainer}
            ></Route>
            <Route
              exact
              path="/(dashboard)"
              component={DefaultContainer}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
