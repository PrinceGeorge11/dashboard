import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://dashboard-api-1.onrender.com/api/tasks', { name, description, project })
      .then(response => {
        alert('Task created successfully!');
        setName('');
        setDescription('');
        setProject('');
      })
      .catch(error => {
        console.error("There was an error creating the task!", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
