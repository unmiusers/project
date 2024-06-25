import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProgressReport.css";
const ProgressReport = () => {
    const [progress, setProgress] = useState([]);
    useEffect(() => {
        fetchProgress();
    }, []);
    const fetchProgress = async () => {
        try {
            const response = await axios.get("/api/reports/progress");
            setProgress(response.data);
        } catch (error) {
            console.error("Error fetching progress report:", error);
        }
    };
    return (
        <div className="progress-report">
            {" "}
            <h2>Progress Report</h2>{" "}
            <ul>
                {" "}
                {progress.map((item, index) => (
                    <li key={index}>
                        {" "}
                        <p>{item.task}</p> <p>{item.completion}%</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default ProgressReport;