import React from 'react';
import Home from "./components/Home/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ScrollspyNav from "react-scrollspy-nav";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Home/>

      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
