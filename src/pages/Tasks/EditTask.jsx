import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Initialize useNavigate hook
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');

  // Fetch task details using id from the URL
  useEffect(() => {
    axios.get(`https://dashboard-api-1.onrender.com/api/tasks/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setProject(response.data.project);
      })
      .catch((error) => {
        console.error("There was an error fetching the task!", error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://dashboard-api-1.onrender.com/api/tasks/${id}`, { name, description, project })
      .then((response) => {
        alert('Task updated successfully!');
        navigate('/tasks');  // Use navigate instead of history.push
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Task Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Task Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Project</label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
