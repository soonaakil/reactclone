import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import roadmap1 from '../images/react-img/sharing_data_child.png';
import roadmap2 from '../images/react-img/sharing_data_child_clicked.png';
import roadmap3 from '../images/react-img/sharing_data_parent.png';
import roadmap4 from '../images/react-img/sharing_data_parent_clicked.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
// import './MainContent.css';
import Highlight from '../HighlightSyntax/Highlight';


function MainContent() {
        const codeSnippet1 = `function MyButton() {
          return (
            <button>I'm a button</button>
          );
        }`;
        const codeSnippet2 = `export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;
const codeSnippet4 = `function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}`;
const codeSnippet5 = `<img className="avatar" />`;
const codeSnippet6 = `/* In your CSS */
.avatar {
  border-radius: 50%;
}`;
const codeSnippet7 = `return (
  <h1>
    {user.name}
  </h1>
);`;
const codeSnippet8 = `return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);`;
const codeSnippet10 = `let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);`;
const codeSnippet11 = `<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>`;
const codeSnippet12 = `<div>
  {isLoggedIn && <AdminPanel />}
</div>`;
const codeSnippet13 = `const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];`;
const codeSnippet14 = `const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`;
        
const codeSnippet16 = `function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}`;
const codeSnippet17 = `import { useState } from 'react';`;
const codeSnippet18 = `function MyButton() {
  const [count, setCount] = useState(0);
  // ...`;
const codeSnippet19 = `function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}`;
const codeSnippet21 = `export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  // ... we're moving code from here ...
}`;
const codeSnippet22 = `export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}`;
const codeSnippet23 = `function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}`;

// Highlight Pragraph and Heading Letter's      
// const paralet = `<MyButton />`;


return (
    <>
        <div className="main-content">
          <div className="read-first-sec">
            <div className='learn-react'>
                <a href="#learn">
                    <div>
                        LEARN REACT 
                    </div>
                </a>
                <div><FaAngleRight style={{marginTop: '8px'}} /></div>
            </div>
            <div>
                <h1 style={{margin: '10px 0px'}}>Quick Start</h1>
                <p>
                Welcome to the React documentation! This page will give you an introduction to
                the 80% of React concepts that you will use on a daily basis.
                </p>
            </div>
            <div className='un-list'>
                    <h2>You will learn</h2>
                    <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                    </ul>
            </div>
          </div>{/* End of read-first-sec */}

          <div className="read-second-sec">
               <h2 style={{margin: '10px 0px'}}>Creating and nesting components</h2>
                <p>
                React apps are made out of components. A component is a piece of the
                UI (user interface) that has its own logic and appearance. A component can
                be as small as a button, or as large as an entire page.
                </p>
                <p>React components are JavaScript functions that return markup:</p>
                <div className="card-div-1">
                    <Highlight code={codeSnippet1} language="javascript" />
                </div>
                <p>Now that you’ve declared MyButton, you can nest it into another component:</p>
                <div className="card-div-2">
                    <Highlight code={codeSnippet2} language="javascript" />
                </div>
                <p>
                    Notice that {/* <MyButton /> */} starts with a capital letter. That’s how you know
                    it’s a React component. React component names must always start with a capital letter,
                    while HTML tags must be lowercase.
                </p>
                <p>Have a look at the result:</p>
                <div className='card-div-3'> </div>
                <p>
                    The export default keywords specify the main component in the file. 
                    If you’re not familiar with some piece of JavaScript syntax, MDN and 
                    javascript.info have great references.
                </p>
          </div>{/* End of read-second-sec */}

            <div className='read-third-sec'>
                 <h2 style={{margin: '20px 0px'}}>Writing markup with JSX </h2>
                 <p>
                    The markup syntax you’ve seen above is called JSX. It is optional, 
                    but most React projects use JSX for its convenience. All of the tools we 
                    recommend for local development support JSX out of the box.
                 </p>
                 <p>
                    JSX is stricter than HTML. You have to close tags like <br />. 
                    Your component also can’t return multiple JSX tags. You have to wrap 
                    them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
                 </p>
                 <div className="card-div-4">
                     {/* <Syntax_div4 /> */}
                     <Highlight code={codeSnippet4} language="javascript" />
                 </div>
                 <p>
                     If you have a lot of HTML to port to JSX, you can use an online converter.
                 </p>
            </div> {/* End of read-third-sec */}

            <div className="read-fourth-sec">
                 <h2 style={{margin: '20px 0px'}}>Adding styles</h2>
                 <p>
                    In React, you specify a CSS class with className. 
                    It works the same way as the HTML class attribute:
                 </p>
                 <div className="card-div-5">
                     {/* <Syntax_div5 /> */}
                     <Highlight code={codeSnippet5} language="javascript" />
                 </div>
                 <p>Then you write the CSS rules for it in a separate CSS file:</p>
                 <div className="card-div-6">
                      {/* <Syntax_div6 /> */}
                      <Highlight code={codeSnippet6} language="javascript" />
                 </div>
                 <p>
                    React does not prescribe how you add CSS files. In the simplest case, 
                    you’ll add a <link /> tag to your HTML. If you use a build tool or a framework,
                    consult its documentation to learn how to add a CSS file to your project.
                 </p>
            </div> {/* End of read-fourth-sec */}

            <div className="read-fifth-sec">
                 <h2 style={{margin: '20px 0px'}}>Displaying data</h2>
                 <p>
                    JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so 
                    that you can embed some variable from your code and display it to the user. For example, this will display user.name:
                 </p>
                 <div className="card-div-7">
                    {/* <Syntax_div7 /> */}
                    <Highlight code={codeSnippet7} language="javascript" />
                 </div>
                 <p>
                    You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src userimageUrl reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:
                 </p>
                 <div className="card-div-8">
                     {/* <Syntax_div8 /> */}
                     <Highlight code={codeSnippet8} language="javascript" />
                 </div>
                 <p>
                    You can put more complex expressions inside the JSX curly braces too, for example, string concatenation:
                 </p>
                 <div className="card-div-9">
                      {/* <Syntax_div9 /> */}
                 </div>
                 <p>
                    In the above example, style is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.
                 </p>
            </div> {/* End of read-fifth-sec */}

            <div className="read-sixth-sec">
                <h2 style={{margin: '20px 0px'}}>Conditional rendering</h2>
                <p>
                    In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:
                </p>
                <div className="card-div-10">
                     {/* <Syntax_div10 /> */}
                     <Highlight code={codeSnippet10} language="javascript" />
                </div>
                <p>
                    If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:
                </p>
                <div className="card-div-11">
                     {/* <Syntax_div11 /> */}
                     <Highlight code={codeSnippet11} language="javascript" />
                </div>
                <p>
                   When you don’t need the else branch, you can also use a shorter logical && syntax:
                </p>
                <div className="card-div-12">
                    {/* <Syntax_div12 /> */}
                    <Highlight code={codeSnippet12} language="javascript" />
                </div>
                <p>
                    All of these approaches also work for conditionally specifying attributes. If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else.
                </p>
            </div>{/* End of read-sixth-sec */}
               
            <div className="read-seventh-sec">
               <h2 style={{margin: '20px 0px'}}>Rendering lists</h2>
               <p>
                    You will rely on JavaScript features like for loop and the array map() function to
                    render lists of components.
               </p>
               <p>For example, let’s say you have an array of products:</p>
               <div className="card-div-13">
                  {/* <Syntax_div13 /> */}
                  <Highlight code={codeSnippet13} language="javascript" />
               </div>
               <p>
                    Inside your component, use the map() function to transform an array of products into an array of li items:
               </p>
               <div className="card-div-14">
                   {/* <Syntax_div14 /> */}
                   <Highlight code={codeSnippet14} language="javascript" />
               </div>
               <p>
                    Notice how li has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.
               </p>
               <div className="card-div-15"></div>
            </div>{/* End of read-seventh-sec */}

            <div className="read-eighth-sec">
               <h2 style={{margin: '20px 0px'}}>Responding to events</h2>
               <p>
                   You can respond to events by declaring event handler functions inside your components:
               </p>
               <div className="card-div-16">
                   {/* <Syntax_div16 /> */}
                   <Highlight code={codeSnippet16} language="javascript" />
               </div>
               <p>
                    Notice how onClick handleClick has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.
               </p>
            </div>{/* End of read-eighth-sec */}
           
            <div className="read-ninth-sec">
                <h2 style={{margin: '20px 0px'}}>Updating the screen</h2>
                <p>
                    Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.
                </p>
                <p>First, import useState from React:</p>
               <div className="card-div-17">
                    {/* <Syntax_div17 /> */}
                    <Highlight code={codeSnippet17} language="javascript" />
               </div>
               <p>Now you can declare a state variable inside your component:</p>
               <div className="card-div-18">
                     {/* <Syntax_div18 /> */}
                     <Highlight code={codeSnippet18} language="javascript" />
               </div>
               <p>
                    You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].
               </p>
               <p>
                    The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:
               </p>
               <div className="card-div-19">
                   {/* <Syntax_div19 /> */}
                   <Highlight code={codeSnippet19} language="javascript" />
               </div>
               <p>
                    React will call your component function again. This time, count will be 1. Then it will be 2. And so on.
                </p>
                <p>
                    If you render the same component multiple times, each will get its own state. Click each button separately:
                </p>
                <div className="card-div-20"></div>
                <p>Notice how each button “remembers” its own count state and doesn’t affect other buttons.</p>
            </div>{/* End of read-ninth-sec*/}

            <div className="read-tenth-sec">
                <h2 style={{margin: '20px 0px'}}>Using Hooks</h2>
                <p>
                    Functions starting with use are called Hooks. useState is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.
                </p>
                <p>
                    Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.
                </p>
            </div>{/* End of read-tenth-sec */}

            <div className="read-eleventh-sec">
                <h2 style={{margin: '20px 0px'}}>Sharing data between components</h2>
                <p>
                    In the previous example, each MyButton had its own independent count, and when each button was clicked, only the count for the button clicked changed:
                </p>
                <div className="road-img">
                    <img src={roadmap1} alt="Roadmap Image-1" width={300} height={300} /> 
                    <img src={roadmap2} alt="Roadmap Image-2" width={300} height={300} />
                </div>
                <p>
                    However, often you’ll need components to share data and always update together.
                </p>
                <p>
                    To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.
                </p>
                <p>
                    In this example, it is MyApp:
                </p>
                <div className="road-img">
                    <img src={roadmap3} alt="Roadmap Image-3"  width={300} height={300}  /> 
                    <img src={roadmap4} alt="Roadmap Image-4"  width={300} height={300} />
                </div>
                <p>
                    Now when you click either button, the count in MyApp will change, which will change both of the counts in MyButton. Here’s how you can express this in code.
                </p>
                <p>
                    First, move the state up from MyButton into MyApp:
                </p>
                <div className="card-div-21">
                    {/* <Syntax_div21 /> */}
                    <Highlight code={codeSnippet21} language="javascript" />
                </div>
                <p>
                    Then, pass the state down from MyApp to each MyButton, together with the shared click handler. You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like img:
                </p>
                <div className="card-div-22">
                    {/* <Syntax_div22 /> */}
                    <Highlight code={codeSnippet22} language="javascript" />
                </div>
                <p>
                    The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.
                </p>
                <p>
                    Finally, change MyButton to read the props you have passed from its parent component:
                </p>
                <div className="card-div-23">
                    {/* <Syntax_div23 /> */}
                    <Highlight code={codeSnippet23} language="javascript" />
                </div>
                <p>
                    When you click the button, the onClick handler fires. Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1), incrementing the count state variable. The new count value is passed as a prop to each button, so they all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.
                </p>
                <div className="card-div-24"></div>
         </div>{/* End of read-eleventh-sec */}

         <div className="read-twelfth-sec">
            <h2 style={{margin: '20px 0px'}}>Next Steps</h2>
            <p>
               By now, you know the basics of how to write React code!
            </p>
            <p>
               Check out the Tutorial to put them into practice and build your first mini-app with React.
            </p>

            {/* <div className="footer-navigation" style={{marginTop: '100px', marginLeft: '390px', lineHeight: '10px'}}> */}
            <div className="pagination">
                {/* <h4 style={{marginLeft: '130px'}}>NEXT</h4> */}
                <h4>NEXT</h4>
                <FaAngleRight style={{marginLeft: '185px'}} />
                <p>Tutorial: Tic-Tac-Toe</p>
                {/* <p style={{color: '#2e91b3'}}>Tutorial: Tic-Tac-Toe</p> */}
            </div>
         </div>{/* End of read-twelfth-sec */}
        <div style={{marginTop: '100px'}}>
                <hr />
        </div>


{/* Footer Area */}
        <div className="footer">
            <div className="ff-1">
                <div className="f-logo">
                   <FaMeta /><h3 style={{cursor: 'pointer'}}>Meta Open Source</h3>
                </div>
                <p>Copyright © Meta <br /> Platforms, Inc</p>
                <p>uwu</p>
            </div>
            <div className="ff-2">
                <h3 style={{cursor: 'pointer'}}>Learn React</h3>
                <ul>
                    <li><a href="#link">Quick Start</a></li>
                    <li><a href="#link">Installation</a></li>
                    <li><a href="#link">Describing the UI</a></li>
                    <li><a href="#link">Adding</a></li>
                    <li><a href="#link">Interactivity</a></li>
                    <li><a href="#link">Managing State</a></li>
                    <li><a href="#link">Escape Hatches</a></li>
                </ul>
            </div>
            <div className="ff-2">
                <h3 style={{cursor: 'pointer'}}>API Reference</h3>
                <ul>
                    <li><a href="#link">React APIs</a></li>
                    <li><a href="#link">React DOM APIs</a></li>
                </ul>
            </div>
            <div className="ff-2">
                <h3 style={{cursor: 'pointer'}}>Community</h3>
                <ul>
                    <li><a href="#link">Code of Conduct</a></li>
                    <li><a href="#link">Meet the Team</a></li>
                    <li><a href="#link">Docs Contributors</a></li>
                    <li><a href="#link">Acknowledgements</a></li>
                </ul>
            </div>
            <div className="ff-2">
                <span style={{fontSize: '19px', fontWeight: '500', color: '#404757'}}>More</span>
                <ul>
                    <li><a href="#link">Blog</a></li>
                    <li><a href="#link">React Native</a></li>
                    <li><a href="#link">Privacy</a></li>
                    <li><a href="#link">Terms</a></li>
                </ul>
                <ul className='ff-2-social'>
                    <li><a href="#social"><FaFacebook /></a></li>
                    <li><a href="#social"><FaXTwitter /></a></li>
                    <li><a href="#social"><FaBluesky /></a></li>
                    <li><a href="#social"><FaGithub /></a></li>
                </ul>
            </div>
        </div>
    </div> 
    {/* End of main-content */}
    </>
 );
}

export default MainContent;