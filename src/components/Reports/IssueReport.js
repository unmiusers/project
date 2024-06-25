import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IssueReport.css";
const IssueReport = () => {
    const [report, setReport] = useState([]);
    useEffect(() => {
        fetchReport();
    }, []);
    const fetchReport = async () => {
        try {
            const response = await axios.get("/api/reports/issues");
            setReport(response.data);
        } catch (error) {
            console.error("Error fetching issue report:", error);
        }
    };
    return (
        <div className="issue-report">
            {" "}
            <h2>Issue Report</h2>{" "}
            <ul>
                {" "}
                {report.map((item, index) => (
                    <li key={index}>
                        {" "}
                        <p>{item.issue}</p> <p>{item.status}</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default IssueReport;