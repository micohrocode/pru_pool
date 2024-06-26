import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import "../src/backend/function_calls/user_calls"
import "../src/backend/function_calls/ride_calls"
import { loginUser } from '../src/backend/function_calls/user_calls';
import { viewAllRides, viewFilteredRides } from '../src/backend/function_calls/ride_calls';

function App() {
  loginUser("x000000","passwords");
  let all_noncapacity_rides = viewFilteredRides("x000000");
  console.log(all_noncapacity_rides)


  return (
    <div className="App">
      <header className="App-header">
      <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='home' element={<Home/>}/>
       </Routes>
      </header>
    </div>
  );
}

export default App;
