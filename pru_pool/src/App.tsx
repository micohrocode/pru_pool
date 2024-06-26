import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import "../src/backend/function_calls/user_calls"
import "../src/backend/function_calls/ride_calls"
import { loginUser } from '../src/backend/function_calls/user_calls';
import { viewAllRides, viewFilteredRides } from '../src/backend/function_calls/ride_calls';
import { MapTest } from './components/MapTest';

function App() {
  loginUser("x000000","passwords");
  let all_noncapacity_rides = viewFilteredRides("x000000");
  console.log(all_noncapacity_rides)


  return (
    <div className="App">
      <header className="App-header">
      {/* <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='home' element={<Home/>}/>
       </Routes> */}
       <MapTest props={{
            "user":"x111111",
            "start_point":"72 S Clinton Ave, Trenton, NJ 08609",
            "drop_off":"213 Washington St #2917, Newark, NJ 07102",
            "days":3,
            "recurring":true,
            "car_capacity": 4,
            "start_time":"7:00am",
            "arrival_time":"8:45am",
            "car_model":"Tesla Model 3",
            "contact_number":"111-111-1111",
            "current_stops":["72 S Clinton Ave, Trenton, NJ 08609","French St &, Albany St, New Brunswick, NJ 08901","213 Washington St #2917, Newark, NJ 07102"],
            "passengers":[]
        }}/>
      </header>
    </div>
  );
}

export default App;
