import React from 'react';
import './TimeLogPage.css';
import TimeLogEntry from '../../components/TimeLog/TimeLogEntry';
import TimeLogReport from '../../components/TimeLog/TimeLogReport';
import TimeVisualization from '../../components/TimeLog/TimeVisualization';

const TimeLogPage = () => {
    return (
        <div className="time-log-page">
            <h1 className="time-log-title">Time Logs</h1>
            <TimeLogEntry />
            <TimeLogReport />
            <TimeVisualization />
        </div>
    );
};

export default TimeLogPage;
