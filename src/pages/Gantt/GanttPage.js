import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GanttChartView from '../../components/GanttChart/GanttChartView';
import Timeline from '../../components/GanttChart/Timeline';
import './GanttPage.css';

const GanttPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/gantt/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <div className="gantt-page">
            <h1>Gantt Chart</h1>
            <GanttChartView tasks={tasks} />
            <Timeline tasks={tasks} />
        </div>
    );
};

export default GanttPage;
