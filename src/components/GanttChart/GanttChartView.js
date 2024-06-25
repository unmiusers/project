import React, { useEffect, useState } from "react";
import axios from "axios";
import Timeline from "./Timeline";
import "./GanttChartView.css";
const GanttChartView = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const response = await axios.get("/api/gantt/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };
    return (
        <div className="gantt-chart">
            {" "}
            <h2>Gantt Chart</h2> {/* 甘特图可视化实现 */} <Timeline tasks={tasks} />{" "}
        </div>
    );
};
export default GanttChartView;