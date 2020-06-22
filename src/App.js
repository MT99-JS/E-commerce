import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import SHOP_PAGE from "./pages/shoppage/shop_page";
import Header from "./components/header/header";
import LoginPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <React.Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={SHOP_PAGE} />
          <Route path="/signin" component={LoginPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
