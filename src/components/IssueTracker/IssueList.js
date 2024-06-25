import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateIssue from './CreateIssue';
import EditIssue from './EditIssue';
import IssueComments from './IssueComments';
import IssueTimeLog from './IssueTimeLog';
import IssueAttachments from './IssueAttachments';
import './IssueList.css';

const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const [editingIssue, setEditingIssue] = useState(null);

    useEffect(() => {
        fetchIssues();
    }, []);

    const fetchIssues = async () => {
        try {
            const response = await axios.get('/api/issues');
            setIssues(response.data);
        } catch (error) {
            console.error('Error fetching issues:', error);
        }
    };

    const handleIssueCreated = (newIssue) => {
        setIssues((prevIssues) => [...prevIssues, newIssue]);
    };

    const handleEditIssue = (issue) => {
        setEditingIssue(issue);
    };

    const handleIssueUpdated = (updatedIssue) => {
        setIssues((prevIssues) =>
            prevIssues.map((issue) => (issue.id === updatedIssue.id ? updatedIssue : issue))
        );
        setEditingIssue(null);
    };

    const handleCancelEdit = () => {
        setEditingIssue(null);
    };

    return (
        <div className="issue-tracker">
            <header>
                <h1>Issue Tracker</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Issue</li>
                        <li>Comment</li>
                        <li>Workplace</li>
                        <li>Wiki</li>
                        <li>Report</li>
                        <li>Milestone</li>
                        <li>Version</li>
                        <li>About us</li>
                    </ul>
                </nav>
            </header>
            <main>
                <aside className="sidebar">
                    <div className="user-info">
                        <img src="/path/to/user/image" alt="User" />
                        <p>ID: XXXX</p>
                        <button>Edit</button>
                    </div>
                    <ul>
                        <li>Setting</li>
                        <li>My Project</li>
                        <li>My Report</li>
                        <li>My Comment</li>
                    </ul>
                </aside>
                <section className="content">
                    <div className="issues">
                        <h2>Issue List</h2>
                        <ul>
                            {issues.map((issue) => (
                                <li key={issue.id}>
                                    {issue.title} - {issue.status}
                                    <button onClick={() => handleEditIssue(issue)}>Edit</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="comments">
                        <h2>Comments</h2>
                        {/* Example usage of IssueComments component */}
                        {editingIssue && <IssueComments issueId={editingIssue.id} />}
                    </div>
                    <div className="report">
                        <h2>Report</h2>
                        {/* Gantt chart or other reports */}
                    </div>
                    <div className="milestone">
                        <h2>Milestones</h2>
                        {/* Milestones list */}
                    </div>
                    <div className="version">
                        <h2>Version</h2>
                        {/* Version information */}
                    </div>
                </section>
                <section className="forms">
                    <CreateIssue onIssueCreated={handleIssueCreated} />
                    {editingIssue && (
                        <EditIssue
                            issue={editingIssue}
                            onIssueUpdated={handleIssueUpdated}
                            onCancel={handleCancelEdit}
                        />
                    )}
                </section>
            </main>
        </div>
    );
};

export default IssueList;