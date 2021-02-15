import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Index from "./components/pages/Index";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Index} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
