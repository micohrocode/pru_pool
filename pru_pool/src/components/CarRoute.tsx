import React from 'react';

interface RouteProps {
    startLocation: string;
    endLocation: string;
    miles: number;
    estimatedTime: string;
}

const CarRoute: React.FC<RouteProps> = ({ startLocation, endLocation, miles, estimatedTime }) => {
    return (
        <div className="bg-white p-4 mb-4 shadow-sm rounded-lg">
            <h3 className="text-lg text-[#1a1d1e] font-semibold mb-2">{startLocation} to {endLocation}</h3>
            <p className="text-[#1a1d1e]">Miles: {miles}</p>
            <p className="text-[#1a1d1e]">Estimated Time: {estimatedTime}</p>
        </div>
    );
};

export default CarRoute;
