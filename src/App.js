import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import IssuePage from './pages/Issue/IssuePage';
import GanttPage from './pages/Gantt/GanttPage';
import WikiPage from './pages/Wiki/WikiPage';
import VersionPage from './pages/Version/VersionPage';
import ReportsPage from './pages/Reports/ReportsPage';
import QueryPage from './pages/Query/QueryPage';
import TimeLogPage from './pages/TimeLog/TimeLogPage';
import NotificationsPage from './pages/Notifications/NotificationsPage';
import UserPage from './pages/User/UserPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/issues" element={<IssuePage />} />
          <Route path="/gantt" element={<GanttPage />} />
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/version" element={<VersionPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/queries" element={<QueryPage />} />
          <Route path="/timelog" element={<TimeLogPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
};

export default App;
