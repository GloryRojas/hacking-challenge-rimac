import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Intro from './views/Intro';
import PasoUno from './views/PasoUno';
import PasoDos from './views/PasoDos';
import PasoTres from './views/PasoTres';


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Route path="/" exact component={Intro} />
      <Route path="/pasouno/" exact component={PasoUno} />
      <Route path="/pasodos/" exact component={PasoDos} />
      <Route path="/pasotres/" exact component={PasoTres} />
      <Footer />
    </Router>
  ); 
}

export default App;
