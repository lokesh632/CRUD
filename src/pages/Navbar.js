import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/Logo.png';
import Logout from './Admin/Logout'; // Adjust the path as needed

const Navbar = () => {
  const handleLogout = () => {
    
    window.location.href = '/Login';
  };


  return (
    <div className="w-full h-28 flex items-center px-14 justify-between bg-orange-100">
      <img src={logo} alt="Logo" className="h-20 w-auto" />
      <div className="flex items-center">
        <Link 
          to={"/add-user"} 
          className="hover:bg-orange-100 hover:border-2 hover:border-white hover:text-orange-600 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2 mr-4"
        >
          ADD ITEMS
        </Link>
        <button 
          onClick={handleLogout} 
          className="hover:bg-orange-100 hover:border-2 hover:border-white hover:text-orange-600 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default Navbar