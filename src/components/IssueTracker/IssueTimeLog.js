import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssueTimeLog = ({ issueId }) => {
    const [timeLogs, setTimeLogs] = useState([]);
    const [newTimeLog, setNewTimeLog] = useState({
        description: '',
        hours: ''
    });

    useEffect(() => {
        fetchTimeLogs();
    }, [issueId]);

    const fetchTimeLogs = async () => {
        try {
            const response = await axios.get(`/api/issues/${issueId}/timelogs`);
            setTimeLogs(response.data);
        } catch (error) {
            console.error('Error fetching time logs:', error);
        }
    };

    const handleAddTimeLog = async () => {
        try {
            const response = await axios.post(`/api/issues/${issueId}/timelogs`, newTimeLog);
            setTimeLogs((prevLogs) => [...prevLogs, response.data]);
            setNewTimeLog({ description: '', hours: '' });
        } catch (error) {
            console.error('Error adding time log:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTimeLog((prevLog) => ({ ...prevLog, [name]: value }));
    };

    return (
        <div className="issue-time-log">
            <h2>Time Logs</h2>
            <ul>
                {timeLogs.map((log, index) => (
                    <li key={index}>
                        {log.description} - {log.hours} hours
                    </li>
                ))}
            </ul>
            <div>
                <textarea
                    name="description"
                    value={newTimeLog.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                ></textarea>
                <input
                    type="number"
                    name="hours"
                    value={newTimeLog.hours}
                    onChange={handleInputChange}
                    placeholder="Hours"
                />
                <button onClick={handleAddTimeLog}>Add Time Log</button>
            </div>
        </div>
    );
};

export default IssueTimeLog;