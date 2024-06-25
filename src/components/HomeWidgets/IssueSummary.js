import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IssueSummary.css";
const IssueSummary = () => {
    const [summary, setSummary] = useState([]);
    useEffect(() => {
        fetchSummary();
    }, []);
    const fetchSummary = async () => {
        try {
            const response = await axios.get("/api/issues/summary");
            setSummary(response.data);
        } catch (error) {
            console.error("Error fetching issue summary:", error);
        }
    };
    return (
        <div className="issue-summary">
            {" "}
            <h2>Issue Summary</h2>{" "}
            <ul>
                {" "}
                {summary.map((item, index) => (
                    <li key={index}>
                        {" "}
                        <p>{item.status}</p> <p>{item.count}</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default IssueSummary;