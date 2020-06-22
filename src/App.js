import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import SHOP_PAGE from "./pages/shoppage/shop_page";
import Header from "./components/header/header";

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={SHOP_PAGE} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
