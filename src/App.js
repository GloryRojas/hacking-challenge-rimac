import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Intro from './views/Intro';
import PasoUno from './views/PasoUno';


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Route path="/" exact component={Intro} />
      <Route path="/pasouno/" exact component={PasoUno} />
      <Footer />
    </Router>
  ); 
}

export default App;
