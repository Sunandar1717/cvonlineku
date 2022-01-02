import React from 'react';
import About from './components/About';
import Advice from './components/Advice';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
     <Advice/>
     <Footer/>
    </div>
  );
}

export default App;
