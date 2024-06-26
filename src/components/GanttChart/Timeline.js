import React from 'react';
import './Timeline.css';

const Timeline = ({ tasks = [] }) => {
    if (!Array.isArray(tasks)) {
        return <div>No tasks available</div>;
    }

    return (
        <div className="timeline">
            <h3>Timeline</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="timeline-task">
                        <span className="task-name">{task.name}</span>
                        <span className="task-duration">
                            {task.start} - {task.end}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
