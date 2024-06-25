import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TimeVisualization.css";
const TimeVisualization = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get("/api/timelog/visualization");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching time visualization data:", error);
        }
    };
    return (
        <div className="time-visualization">
            {" "}
            <h2>Time Visualization</h2>{" "}
            {/* Implement your visualization logic here, e.g., charts */}{" "}
        </div>
    );
};
export default TimeVisualization;