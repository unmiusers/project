import React from 'react';
import IssueList from '../../components/IssueTracker/IssueList';
import './IssuePage.css';

const IssuePage = () => {
    return (
        <div className="issue-page">
            <IssueList />
        </div>
    );
};

export default IssuePage;