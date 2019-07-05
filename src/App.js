import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel'
import FormSignIn from './components/form-inicio/FormSignIn';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <FormSignIn />
      <Footer />
    </>
  );
}

export default App;
