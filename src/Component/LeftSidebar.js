import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
// import './LeftSidebar.css'; 

const LeftSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index);
    }
  };

  const sidebarItems = [
    {
      title: 'Quick Start',
      subItems: ['Tutorial: Tic-Tac-Toe', 'Thinking in React'],
    },
    {
      title: 'Installation',
      subItems: ['Start a New React Project', 
                 'Add React to an Existing Project', 
                 'Editor Setup',
                 'Using TypeScript',
                 'React Developer Tools',
                 'React Compiler',
                ],
    },
    {
      title: 'Describing the UI',
      subItems: ['Your First Component', 
                 'Importing and Exporting Components', 
                 'Writing Markup with JSX',
                 'JavaScript in JSX with Curly Braces',
                 'Passing Props to a Component',
                 'Conditional Rendering',
                 'Rendering Lists',
                 'Keeping Components Pure',
                 'Your UI as a Tree',
                ],
    },
    {
      title: 'Adding Interactivity',
      subItems: ['Responding to Events', 
                 "State: A Component's Memory", 
                 'Render and Commit',
                 'State as a Snapshot',
                 'Queueing a Series of State Updates',
                 'Updating Objects in State',
                 'Updating Arrays in State',
                ],
    },
    {
      title: 'Managing State',
      subItems: ['Reacting to Input with State', 
                 'Choosing the State Structure', 
                 'Sharing State Between Components',
                 'Preserving and Resetting State',
                 'Extracting State Logic into a Reducer',
                 'Passing Data Deeply with Context',
                 'Scaling Up with Reducer and Context',
                ],
    },
    {
      title: 'Escape Hatches',
      subItems: ['Referencing Values with Refs', 
                 'Manipulating the DOM with Refs', 
                 'Synchronizing with Effects',
                 'You Might Not Need an Effect',
                 'Lifecycle of Reactive Effects',
                 'Separating Events from Effects',
                 'Removing Effect Dependencies',
                 'Reusing Logic with Custom Hooks',
                ],
    },
  ];

  return (
    <div className="left-sidebar">
      <h3 style={{color: 'grey', marginLeft: '7px', fontSize: '15px'}}>GET STARTED</h3>
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <div 
            className={`menu-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}>
              <span>{item.title}</span>
              <span>
                {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
            {activeIndex === index && (
              <ul className="sub-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
