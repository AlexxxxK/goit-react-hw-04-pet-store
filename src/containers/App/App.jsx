import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavPage from "../../components/Nav/Nav";
import HomePage from "../../components/Home/Home";
import AboutPage from "../../components/About/About";
import PetsPage from "../../components/Pets/Pets";
import PetPage from "../../components/Pet/Pet";

const App = () => (
  <>
    <NavPage />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
