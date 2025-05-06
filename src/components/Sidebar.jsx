import React, { useState } from 'react';

const Sidebar = () => {
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [tasksMenuOpen, setTasksMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 w-64 min-h-screen p-4 text-white">
      <h2 className="text-xl font-semibold mb-6">Dashboard Menu</h2>
      
      {/* Main Menu */}
      <ul>
        {/* Dashboard */}
        <li className="mb-4">
          <a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded flex items-center">
            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
          </a>
        </li>

        {/* Projects */}
        <li className="mb-4">
          <button 
            onClick={() => setProjectsMenuOpen(!projectsMenuOpen)} 
            className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded flex items-center"
          >
            <i className="fas fa-project-diagram mr-3"></i> Projects
            <i className={`ml-auto ${projectsMenuOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
          </button>

          {/* Projects Submenu */}
          {projectsMenuOpen && (
            <ul className="ml-6">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-plus-circle mr-3"></i> Create Project
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-edit mr-3"></i> Edit Project
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-trash-alt mr-3"></i> Delete Project
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Tasks */}
        <li className="mb-4">
          <button 
            onClick={() => setTasksMenuOpen(!tasksMenuOpen)} 
            className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded flex items-center"
          >
            <i className="fas fa-tasks mr-3"></i> Tasks
            <i className={`ml-auto ${tasksMenuOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}`}></i>
          </button>

          {/* Tasks Submenu */}
          {tasksMenuOpen && (
            <ul className="ml-6">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-plus-circle mr-3"></i> Create Task
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-edit mr-3"></i> Edit Task
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-blue-500 rounded flex items-center">
                  <i className="fas fa-trash-alt mr-3"></i> Delete Task
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Recent Activities */}
        <li className="mb-4">
          <a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded flex items-center">
            <i className="fas fa-history mr-3"></i> Recent Activities
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
