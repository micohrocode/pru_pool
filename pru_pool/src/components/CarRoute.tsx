import React from 'react';

interface RouteProps {
    startLocation: string;
    endLocation: string;
    arrivalTime: string;
}

const CarRoute: React.FC<RouteProps> = ({ startLocation, endLocation, arrivalTime }) => {
    return (
        <div className="bg-white p-4 mb-4 shadow-sm rounded-lg">
            <h3 className="text-lg text-[#1a1d1e] font-semibold mb-2">{startLocation} to {endLocation}</h3>
            <p className="text-[#1a1d1e]">Arrival Time: {arrivalTime}</p>
        </div>
    );
};

export default CarRoute;
