import React from "react";
import Home from "./Home";
import Search from "./Search";
import Favourites from "./Favourites";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Container() {
  return (
    <div>
      <Route
        path="/home"
        exact
        render={({ match }) => <Home match={match} />}
      />
      <Route
        path="/search"
        exact
        render={({ match }) => <Search match={match} />}
      />
      <Route
        path="/favourites"
        exact
        render={({ match }) => <Favourites match={match} />}
      />
      <Route
        path="/favourite/:id"
        exact
        render={({ match }) => <Favourites match={match} />}
      />
    </div>
  );
}
