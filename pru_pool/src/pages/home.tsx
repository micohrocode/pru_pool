import React from 'react';
import logo from '../assets/1.png';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
const navigate = useNavigate();

const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    navigate('/request');
  };
  return (
    <div className="flex flex-col justify-normal pt-6 items-center w-screen min-h-screen bg-gradient-to-l from-[#42a7f0] to-[#004d99] text-white">
      <div className="w-2/5 mt-4 mb-12 p-6 rounded-2xl bg-[#e5e6eb] shadow-xl">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <div className="m-5 text-1xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 text-center">
        What would you like to do?
      </div>
      <div className="flex space-x-10 mt-14">
        <button onClick={handleButtonClick} className="bg-[#002b5a] hover:bg-[#003265] text-white font-bold py-6 px-12 rounded-lg shadow-lg">
          Request a ride
        </button>
        <button className="bg-[#002b5a] hover:bg-[#003265] text-white font-bold py-6 px-12 rounded-lg shadow-lg">
          Offer a Ride
        </button>
      </div>
    </div>
  );
};

export default Home;
