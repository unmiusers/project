import React from "react";
import axios from "axios";

const EditIssue = ({ issue, onIssueUpdated, onCancel }) => {
    const [editingIssue, setEditingIssue] = useState(issue);

    const handleEditingInputChange = (e) => {
        const { name, value } = e.target;
        setEditingIssue((prevIssue) => ({ ...prevIssue, [name]: value }));
    };

    const handleUpdateIssue = async () => {
        try {
            const response = await axios.put(
                `/api/issues/${editingIssue.id}`,
                editingIssue
            );
            onIssueUpdated(response.data);
        } catch (error) {
            console.error("Error updating issue:", error);
        }
    };

    return (
        <div className="edit-issue">
            <h2>Edit Issue</h2>
            <div>
                <input
                    type="text"
                    name="title"
                    value={editingIssue.title}
                    onChange={handleEditingInputChange}
                    placeholder="Title"
                />
                <textarea
                    name="description"
                    value={editingIssue.description}
                    onChange={handleEditingInputChange}
                    placeholder="Description"
                ></textarea>
                <select
                    name="type"
                    value={editingIssue.type}
                    onChange={handleEditingInputChange}
                >
                    <option value="bug">Bug</option>
                    <option value="task">Task</option>
                    <option value="enhancement">Enhancement</option>
                </select>
                <select
                    name="priority"
                    value={editingIssue.priority}
                    onChange={handleEditingInputChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <select
                    name="status"
                    value={editingIssue.status}
                    onChange={handleEditingInputChange}
                >
                    <option value="new">New</option>
                    <option value="assigned">Assigned</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                </select>
                <input
                    type="text"
                    name="assignee"
                    value={editingIssue.assignee}
                    onChange={handleEditingInputChange}
                    placeholder="Assignee"
                />
                <button onClick={handleUpdateIssue}>Update Issue</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditIssue;