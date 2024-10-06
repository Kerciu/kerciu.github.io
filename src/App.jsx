import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

import './App.css';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
  </div>;
}

export default App
