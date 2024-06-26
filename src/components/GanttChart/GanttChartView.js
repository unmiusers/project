import React from 'react';
import './GanttChartView.css';

const GanttChartView = ({ tasks = [] }) => {
    if (!Array.isArray(tasks)) {
        return <div>No tasks available</div>;
    }

    return (
        <div className="gantt-chart-view">
            <h3>Gantt Chart View</h3>
            {/* 自定义的甘特图展示逻辑 */}
            {tasks.map((task) => (
                <div key={task.id} className="gantt-task">
                    <span className="task-name">{task.name}</span>
                    <span className="task-duration">
                        {task.start} - {task.end}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default GanttChartView;
