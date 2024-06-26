import React from 'react';
import CarRoute from '../components/CarRoute';
import { MapTest } from '../components/MapTest';

const Map: React.FC = () => {
    const routes = [
        { startLocation: 'Location A', endLocation: 'Location B', miles: 50, estimatedTime: '1 hour' },
        { startLocation: 'Location C', endLocation: 'Location D', miles: 30, estimatedTime: '45 minutes' },
        { startLocation: 'Location E', endLocation: 'Location F', miles: 20, estimatedTime: '30 minutes' },
    ];

    return (
        <div className="flex w-screen">
            <div className="w-1/3 bg-gray-100 p-4">
                <h2 className="text-lg text-[#1a1d1e] font-semibold mb-4">Routes</h2>
                {routes.map((route, index) => (
                    <CarRoute
                        key={index}
                        startLocation={route.startLocation}
                        endLocation={route.endLocation}
                        miles={route.miles}
                        estimatedTime={route.estimatedTime}
                    />
                ))}
            </div>
            <div className="w-2/3 bg-gray-300">
                <div className="h-full bg-white p-4 pb-20 max-h-full">
                    <MapTest 
                        props={
                            {
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
                                "current_stops":["72 S Clinton Ave, Trenton, NJ 08609","213 Washington St #2917, Newark, NJ 07102"],
                                "passengers":[]
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;
