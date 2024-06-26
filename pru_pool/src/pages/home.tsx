import React from 'react';
import logo from '../assets/1.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-normal pt-6 items-center w-screen min-h-screen bg-gradient-to-l from-[#42a7f0] to-[#004d99] text-white">
      <div className="w-2/5 mt-1 mb-8 p-4 rounded-xl bg-[#e5e6eb]">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="m-5 text-1xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-center">
        What would you like to do?
      </div>
      <div className="flex space-x-10 mt-20">
        <button className="bg-[#002b5a] hover:bg-[#003265] text-white font-bold py-4 px-8 rounded-lg">
          Request a ride
        </button>
        <button className="bg-[#002b5a] hover:bg-[#003265] text-white font-bold py-4 px-8 rounded-lg">
          Offer a Ride
        </button>
      </div>
    </div>
  );
};

export default Home;
