import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 h-full bg-gray-800 p-4 lg:w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden">
        <svg className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
        </svg>
        <svg className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div className="mt-8 lg:mt-0 lg:flex lg:flex-col lg:space-y-4">
        <Link to="/" onClick={closeMenu} className="text-white block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white">Home</Link>
        <Link to="/about" onClick={closeMenu} className="text-white block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white">About</Link>
        <Link to="/buttons" onClick={closeMenu} className="text-white block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white">Buttons</Link>
      </div>
    </nav>
  );
};

export default Navbar;
