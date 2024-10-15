import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';

import './App.css';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
  </div>;
}

export default App
