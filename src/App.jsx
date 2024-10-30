import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './App.css';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>;
}

export default App
