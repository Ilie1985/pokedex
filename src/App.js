//create a functional component
//import browser router
//Router alows us to set Routes for navigation on different screens
//create Route with a path to home page
//conect it to the component Pokedex.js
//to avoid any conflict with the Route add exact property

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/pokemon/:id" component={PokemonDetails} />
    </Router>
  );
}
