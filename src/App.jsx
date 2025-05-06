import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
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
          <Switch>
            {/* Dashboard */}
            <Route exact path="/" component={DashboardCards} />

            {/* Project Routes */}
            <Route exact path="/projects" component={ProjectsList} />
            <Route path="/projects/create" component={CreateProject} />
            <Route path="/projects/edit/:id" component={EditProject} />

            {/* Task Routes */}
            <Route exact path="/tasks" component={TasksList} />
            <Route path="/tasks/create" component={CreateTask} />
            <Route path="/tasks/edit/:id" component={EditTask} />

            {/* Other Routes */}
            <Route path="/calendar" component={Calendar} />
            <Route path="/recent" component={RecentProjects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
