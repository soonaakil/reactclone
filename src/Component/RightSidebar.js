import React from 'react'

function RightSidebar() {
  return (
    <>
        <div className='right-sidebar'>
            <div>
              <h3>ON THIS PAGE</h3>
              <h4 className='active'>Overview</h4>
            </div>
            <ul>
                <li><a href="#read">Creating and nesting components</a></li>
                <li><a href="#read">Writing markup with JSX</a></li>
                <li><a href="#read">Adding styles</a></li>
                <li><a href="#read">Displaying data</a></li>
                <li><a href="#read">Conditional rendering</a></li>
                <li><a href="#read">Rendering lists</a></li>
                <li><a href="#read">Responding to events</a></li>
                <li><a href="#read">Updating the screen</a></li>
                <li><a href="#read">Using Hooks</a></li>
                <li><a href="#read">Sharing data between components</a></li>
                <li><a href="#read">Next Steps</a></li>
            </ul>
        </div>
    </>
  )
}

export default RightSidebar