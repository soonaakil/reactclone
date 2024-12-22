import React, { useState, useEffect } from 'react';
import './RightSidebar.css';

function RightSidebar() {
    const [activeLink, setActiveLink] = useState('');
  
    // Function to detect the section currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveLink(currentSection);
    };
  
    useEffect(() => {
      // Listen for scroll events
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <>
        <div className='right-sidebar'>
            <div>
              <h3>ON THIS PAGE</h3>
              {/* <h4 className='active'>Overview</h4> */}
            </div>
            <ul>
                <li className={activeLink === 'section0' ? 'active' : ''}>
                  <a href="#read">
                     Overview
                  </a>
                </li>
                <li className={activeLink === 'section1' ? 'active' : ''}>
                  <a href="#read">
                  Creating and nesting components
                  </a>
                </li>
                <li className={activeLink === 'section2' ? 'active' : ''}>
                  <a href="#read">
                    Writing markup with JSX
                  </a>
                </li>
                <li className={activeLink === 'section3' ? 'active' : ''}>
                  <a href="#read">
                    Adding styles
                  </a>
                </li>
                <li className={activeLink === 'section4' ? 'active' : ''}>
                  <a href="#read">
                    Displaying data
                  </a>
                </li>
                <li className={activeLink === 'section5' ? 'active' : ''}>
                  <a href="#read">
                    Conditional rendering
                  </a>
                </li>
                <li className={activeLink === 'section6' ? 'active' : ''}>
                  <a href="#read">
                    Rendering lists
                  </a>
                </li>
                <li className={activeLink === 'section7' ? 'active' : ''}>
                  <a href="#read">
                    Responding to events
                  </a>
                </li>
                <li className={activeLink === 'section8' ? 'active' : ''}>
                  <a href="#read">
                    Updating the screen
                  </a>
                </li>
                <li className={activeLink === 'section9' ? 'active' : ''}>
                  <a href="#read">
                    Using Hooks
                  </a>
                </li>
                <li className={activeLink === 'section10' ? 'active' : ''}>
                  <a href="#read">
                    Sharing data between components
                  </a>
                </li>
                <li className={activeLink === 'section11' ? 'active' : ''}>
                  <a href="#read">
                    Next Steps
                  </a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default RightSidebar