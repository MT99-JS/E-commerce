import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import SHOP_PAGE from "./pages/shoppage/shop_page";
import Header from "./components/header/header";
import LoginPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "../src/redux/actions-reducer";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser({ userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={SHOP_PAGE} />
          <Route path="/signin" component={LoginPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
