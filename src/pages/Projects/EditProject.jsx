import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Initialize useNavigate
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`https://dashboard-api-1.onrender.com/api/projects/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.error("There was an error fetching the project!", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://dashboard-api-1.onrender.com/api/projects/${id}`, { name, description })
      .then((response) => {
        alert('Project updated successfully!');
        navigate('/projects');  // Use navigate instead of history.push
      })
      .catch((error) => {
        console.error("There was an error updating the project!", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Project Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Project Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Project</button>
      </form>
    </div>
  );
};

export default EditProject;
