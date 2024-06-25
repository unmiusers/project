import React from 'react';

const IssueLabels = ({ labels, onChange }) => {
    return (
        <div className="issue-labels">
            {labels.map((label, index) => (
                <span key={index} className="label" onClick={() => onChange(label)}>
                    {label}
                </span>
            ))}
        </div>
    );
};

export default IssueLabels;