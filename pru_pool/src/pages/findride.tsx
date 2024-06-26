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
                <div className="h-full bg-white p-4">
                    {/* <MapTest 
                        props={
                            
                        }
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Map;
