import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortopolioList from './components/PortopolioList';

function App() {
  return (
    <div id="page-top">
     <Navbar/>
     <Hero/>
     <PortopolioList/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
