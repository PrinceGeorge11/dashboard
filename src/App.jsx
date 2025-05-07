import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCards';
import RecentProjects from './components/RecentProjects';
import Calendar from './components/Calendar';

// Project pages
import CreateProject from './pages/Projects/CreateProject';
import EditProject from './pages/Projects/EditProject';
import ProjectsList from './pages/Projects/ProjectsList';

// Task pages
import CreateTask from './pages/Tasks/CreateTask';
import EditTask from './pages/Tasks/EditTask';
import TasksList from './pages/Tasks/TasksList';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <Routes> {/* Replace Switch with Routes */}
            {/* Dashboard */}
            <Route exact path="/" element={<DashboardCard />} />

            {/* Project Routes */}
            <Route exact path="/projects" element={<ProjectsList />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects/edit/:id" element={<EditProject />} />

            {/* Task Routes */}
            <Route exact path="/tasks" element={<TasksList />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />

            {/* Other Routes */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/recent" element={<RecentProjects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
