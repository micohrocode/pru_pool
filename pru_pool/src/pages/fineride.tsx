import React from 'react';
import CarRoute from '../components/CarRoute';
import { MapTest } from '../components/MapTest';
import {viewFilteredRides} from '../backend/function_calls/ride_calls'
import currentUser from "../backend/data/currentUser.json"

const Map: React.FC = () => {
    console.log("------------------------------------------")
    console.log(currentUser)
    let rides = viewFilteredRides("x000000") as Array<any>;
    console.log(rides[0])

    return (
        <div className="flex flex-wrap w-screen">
            {rides?.map((ride, index) => (
                <div key={index} className="flex flex-col m-4" style={{ width: "calc(33.333% - 2rem)" }}>
                    <CarRoute startLocation={ride.start_point} endLocation={ride.drop_off} arrivalTime={ride.arrival_time} />
                    <MapTest props={ride} />
                </div>
            ))}
        </div>
    );
};

export default Map;
