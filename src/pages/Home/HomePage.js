// pages/Home/HomePage.jsimport React from 'react';
const HomePage = () => {
    const openWindow = (url) => {
        window.open(url, "_blank", "width=800,height=600");
    };
    return (
        <div className="home-page">
            {" "}
            <h1>Welcome to Issue Tracker</h1>{" "}
            <button onClick={() => openWindow("/issues")}>Issue Tracker</button>{" "}
            <button onClick={() => openWindow("/gantt")}>Gantt Chart</button>{" "}
            <button onClick={() => openWindow("/wiki")}>Wiki</button>{" "}
            <button onClick={() => openWindow("/version")}>Version Control</button>{" "}
            <button onClick={() => openWindow("/reports")}>Reports</button>{" "}
            <button onClick={() => openWindow("/queries")}>Custom Queries</button>{" "}
            <button onClick={() => openWindow("/timelog")}>Time Log</button>{" "}
            <button onClick={() => openWindow("/notifications")}>
                Notifications
            </button>{" "}
            <button onClick={() => openWindow("/users")}>User Management</button>{" "}
        </div>
    );
};
export default HomePage;