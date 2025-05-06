import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Dashboard</h1>
        <div className="space-x-4">
          <button className="text-white">Profile</button>
          <button className="text-white">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
