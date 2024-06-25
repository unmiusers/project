import React from "react";
import GanttChartView from "../components/GanttChart/GanttChartView";
import "./GanttPage.css";
const GanttPage = () => {
    return (
        <div className="gantt-page">
            {" "}
            <GanttChartView />{" "}
        </div>
    );
};
export default GanttPage;