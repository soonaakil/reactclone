import React from 'react';
import './Style.css';
import Header from './Header.js'
import LeftSidebar from './LeftSidebar.js';
import MainContent from './MainContent.js';
import RightSidebar from './RightSidebar.js';

function Navbar() {
    const Design = {
        display: 'flex',
        marginTop: '80px',
        marginLeft: '20px',
        marginRight: '20px',
        justifyContent: 'space-between'
        // justifyContent: 'space-evenly'
        // justifyContent: 'space-around'
    }

    return (
    <>
         <div>
             <Header />
         </div>
         <div style={Design}>
            <div>
                <LeftSidebar />
            </div>
            <div>
                <MainContent />
            </div>
            <div>
                <RightSidebar />
            </div>
         </div>
    </>
  ) 
}

export default Navbar