import React from 'react';

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 shadow-lg rounded-lg p-6 text-white">
        <h3 className="text-xl font-semibold">Total Projects</h3>
        <p className="text-2xl">10</p>
      </div>
      <div className="bg-green-500 shadow-lg rounded-lg p-6 text-white">
        <h3 className="text-xl font-semibold">Total Tasks</h3>
        <p className="text-2xl">25</p>
      </div>
      <div className="bg-yellow-500 shadow-lg rounded-lg p-6 text-white">
        <h3 className="text-xl font-semibold">Active Users</h3>
        <p className="text-2xl">150</p>
      </div>
      <div className="bg-purple-500 shadow-lg rounded-lg p-6 text-white">
        <h3 className="text-xl font-semibold">Recent Updates</h3>
        <p className="text-2xl">3</p>
      </div>
    </div>
  );
};

export default DashboardCards;
