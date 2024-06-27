import React from 'react';
import CarRoute from '../components/CarRoute';
import { MapTest } from '../components/MapTest';
import {viewFilteredRides} from '../backend/function_calls/ride_calls'
import currentUser from "../backend/data/currentUser.json"

const Map: React.FC = () => {
    console.log("------------------------------------------")
    const jsonData = localStorage.getItem("currentUser");
    console.log(jsonData ? jsonData.toString() : null)
    let rides = viewFilteredRides(jsonData ? jsonData.toString() : "") as Array<any>;
    

    return (
        <div className="flex flex-wrap w-screen h-screen bg-gradient-to-l from-[#42a7f0] to-[#004d99]">
            {rides?.map((ride, index) => (
                <div key={index} className="flex flex-col m-4" style={{ width: "calc(33.333% - 2rem)", height:"80vh" }}>
                    <CarRoute startLocation={ride.start_point} endLocation={ride.drop_off} arrivalTime={ride.arrival_time} />
                    <MapTest props={ride} />
                </div>
            ))}
        </div>
    );
};

export default Map;
