import React, { useState } from 'react';
import axios from 'axios';

const CreateIssue = ({ onIssueCreated }) => {
    const [newIssue, setNewIssue] = useState({
        title: '',
        description: '',
        type: 'bug',
        priority: 'medium',
        status: 'new',
        assignee: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewIssue((prevIssue) => ({ ...prevIssue, [name]: value }));
    };

    const handleCreateIssue = async () => {
        try {
            const response = await axios.post('/api/issues', newIssue);
            onIssueCreated(response.data);
            setNewIssue({
                title: '',
                description: '',
                type: 'bug',
                priority: 'medium',
                status: 'new',
                assignee: ''
            });
        } catch (error) {
            console.error('Error creating issue:', error);
        }
    };

    return (
        <div className="create-issue">
            <h2>Create New Issue</h2>
            <div>
                <input
                    type="text"
                    name="title"
                    value={newIssue.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                />
                <textarea
                    name="description"
                    value={newIssue.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                ></textarea>
                <select name="type" value={newIssue.type} onChange={handleInputChange}>
                    <option value="bug">Bug</option>
                    <option value="task">Task</option>
                    <option value="enhancement">Enhancement</option>
                </select>
                <select name="priority" value={newIssue.priority} onChange={handleInputChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <select name="status" value={newIssue.status} onChange={handleInputChange}>
                    <option value="new">New</option>
                    <option value="assigned">Assigned</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                </select>
                <input
                    type="text"
                    name="assignee"
                    value={newIssue.assignee}
                    onChange={handleInputChange}
                    placeholder="Assignee"
                />
                <button onClick={handleCreateIssue}>Create Issue</button>
            </div>
        </div>
    );
};

export default CreateIssue;