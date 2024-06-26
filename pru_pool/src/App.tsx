import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import "../src/backend/function_calls/user_calls"
import "../src/backend/function_calls/ride_calls"
import { loginUser } from '../src/backend/function_calls/user_calls';
import MapTest from './components/MapTest';
import { viewAllRides } from '../src/backend/function_calls/ride_calls';
import RequestForm from './components/RequestForm';
import Map from './pages/findride';

function App() {
  loginUser("x000000","passwords");
  let all_noncapacity_rides = viewAllRides();


  return (
    <div className="App">
      <header className="App-header">
      <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='home' element={<Home/>}/>
         <Route path='request' element={<RequestForm />}/>
         <Route path='map' element={<Map />} />
       </Routes>
      </header>
    </div>
  );
}

export default App;
