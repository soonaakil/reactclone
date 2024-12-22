import React, { useState, useEffect } from 'react';

import Navbar from './Component/Navbar'


function App() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
        <div className={`app-container ${isScrolled ? 'scrolled' : ''}`}>
          <Navbar />
        </div>
  )
}

export default App


