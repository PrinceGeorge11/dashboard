import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-api-url/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Project Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="py-2 px-4 border-b">{project.name}</td>
              <td className="py-2 px-4 border-b">{project.description}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
                <button className="bg-red-500 text-white p-2 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentProjects;
