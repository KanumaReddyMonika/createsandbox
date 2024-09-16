// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealSearch from "./components/MealSearch";
import MealDetail from "./components/MealDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Meal Finder</h1>
        </nav>
        <Switch>
          <Route path="/" exact component={MealSearch} />
          <Route path="/meal/:id" component={MealDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
