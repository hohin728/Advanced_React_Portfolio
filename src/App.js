import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Footer from "./components/footer";
import FreeMedCure from "./pages/freemedcure";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects/freemedcure" component={FreeMedCure} />
          <Redirect from="/" to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
