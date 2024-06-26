import React from 'react';
import { Link } from 'react-router-dom';
import IssueSummary from '../../components/HomeWidgets/IssueSummary';
import ProjectProgress from '../../components/HomeWidgets/ProjectProgress';
import Notifications from '../../components/HomeWidgets/Notifications';
import './HomePage.css';

const HomePage = () => {
    const openWindow = (url) => {
        window.open(url, "_blank", "width=800,height=600");
    };

    return (
        <div className="home-page">
            <header>
                <h1>Issue Tracker</h1>
                <nav>
                    <Link to="/login" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/login");}}>Login</Link>
                    <Link to="/register" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/register");}}>Register</Link>
                    <Link to="/issues" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/issues");}}>Issue Tracker</Link>
                    <Link to="/gantt" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/gantt");}}>Gantt Chart</Link>
                    <Link to="/wiki" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/wiki");}}>Wiki</Link>
                    <Link to="/version" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/version");}}>Version Control</Link>
                    <Link to="/reports" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/reports");}}>Reports</Link>
                    <Link to="/queries" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/queries");}}>Custom Queries</Link>
                    <Link to="/timelog" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/timelog");}}>Time Log</Link>
                    <Link to="/notifications" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/notifications");}}>Notifications</Link>
                    <Link to="/users" target="_blank" onClick={(e) => {e.preventDefault(); openWindow("/users");}}>User Management</Link>
                </nav>
            </header>
            <main>
                <div className="widget-container">
                    <IssueSummary />
                    <ProjectProgress />
                    <Notifications />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
