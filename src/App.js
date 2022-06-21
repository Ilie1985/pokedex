//create a functional component
//import browser router
//Router alows us to set Routes for navigation on different screens
//create Route with a path to home page
//conect it to the component Pokedex.js
//to avoid any conflict with the Route add exact property

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
