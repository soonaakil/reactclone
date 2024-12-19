import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';  // You can change the theme here
import 'prismjs/components/prism-javascript.min.js';  // For JavaScript code
import 'prismjs/components/prism-jsx.min.js';  // For JSX code

const Highlight = ({ code, language }) => {
    useEffect(() => {
      Prism.highlightAll();
    }, [code]);
  
    const codeBlockStyles = {
      backgroundColor: 'white',
      // padding: '20px',
      borderRadius: '20px',
      margin: '20px -100px 20px 0px',
      boxShadow: '0 4px 6px rgba(169, 169, 169, 0.5)',
      // overflowX: 'auto',
      fontFamily: "'Courier New', Courier, monospace",
    };

    return (
      <pre style={codeBlockStyles} className='code-block'>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    );
  };
  
  export default Highlight;
  