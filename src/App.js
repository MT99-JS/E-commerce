import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
