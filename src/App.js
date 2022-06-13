//create a functional component
//import browser router
//Router alows us to set Routes for navigation on different screens
//create Route with a path to home page
//conect it to the component Pokedex.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./pages/Pokedex";

export default function App() {
  return (
    <Router>
      <AppNavigator />

      <Route path="/">
        <Pokedex />
      </Route>
    </Router>
  );
}
