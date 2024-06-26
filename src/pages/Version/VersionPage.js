import React from 'react';
import BranchInfo from '../../components/VersionControl/BranchInfo';
import CodeDiff from '../../components/VersionControl/CodeDiff';
import CommitList from '../../components/VersionControl/CommitList';
import './VersionPage.css';

const VersionPage = () => {
    return (
        <div className="version-page">
            <h1 className="version-title">Version Control</h1>
            <div className="version-section">
                <BranchInfo />
            </div>
            <div className="version-section">
                <CommitList />
            </div>
            <div className="version-section">
                <CodeDiff commitId="latest" />
            </div>
        </div>
    );
};

export default VersionPage;
