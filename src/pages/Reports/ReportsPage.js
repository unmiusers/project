import React from 'react';
import './ReportsPage.css';
import IssueReport from '../../components/Reports/IssueReport';
import ProgressReport from '../../components/Reports/ProgressReport';
import ExportReport from '../../components/Reports/ExportReport';

const ReportsPage = () => {
    return (
        <div className="reports-page">
            <h1 className="reports-title">Reports</h1>
            <IssueReport />
            <ProgressReport />
            <ExportReport />
        </div>
    );
};

export default ReportsPage;
