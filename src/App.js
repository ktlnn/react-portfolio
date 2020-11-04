import React from 'react';
import MainPage from "./components/MainPage";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={MainPage} />
        <Route exact path="/contact" component={MainPage} />
        <Route exact path="/portfolio" component={MainPage} />
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
