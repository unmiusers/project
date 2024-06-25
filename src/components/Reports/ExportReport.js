import React from "react";
import axios from "axios";
import "./ExportReport.css";
const ExportReport = () => {
    const handleExport = async (format) => {
        try {
            const response = await axios.get(`/api/reports/export?format=${format}`, {
                responseType: "blob",
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `report.${format}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Error exporting report:", error);
        }
    };
    return (
        <div className="export-report">
            {" "}
            <h2>Export Report</h2>{" "}
            <button onClick={() => handleExport("csv")}>Export as CSV</button>{" "}
            <button onClick={() => handleExport("pdf")}>Export as PDF</button>{" "}
        </div>
    );
};
export default ExportReport;