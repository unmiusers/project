import React from 'react';

const IssueStatus = ({ status, onChange }) => {
    return (
        <select value={status} onChange={(e) => onChange(e.target.value)}>
            <option value="new">New</option>
            <option value="assigned">Assigned</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
        </select>
    );
};

export default IssueStatus;