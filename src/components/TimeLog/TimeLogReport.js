import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TimeLogReport.css";
const TimeLogReport = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        fetchReports();
    }, []);
    const fetchReports = async () => {
        try {
            const response = await axios.get("/api/timelog/reports");
            setReports(response.data);
        } catch (error) {
            console.error("Error fetching time log reports:", error);
        }
    };
    return (
        <div className="time-log-report">
            {" "}
            <h2>Time Log Reports</h2>{" "}
            <ul>
                {" "}
                {reports.map((report, index) => (
                    <li key={index}>
                        {" "}
                        <p>{report.description}</p> <p>{report.hours} hours</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default TimeLogReport;