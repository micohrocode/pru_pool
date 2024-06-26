import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../src/backend/function_calls/user_calls"
import { loginUser } from '../src/backend/function_calls/user_calls';

function App() {
  loginUser("x000000","passwords");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
