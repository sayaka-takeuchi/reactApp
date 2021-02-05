import logo from './logo.svg';
import './App.css';
import React, { FC } from "react";

type AppPropsType = {
  text: string;
}

const App: FC<AppPropsType> = (props) => {
  return (
    <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           {props.text}
         </a>
       </header>
     </div>
  );
}


export default App;
