import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectProgress.css";
const ProjectProgress = () => {
    const [progress, setProgress] = useState([]);
    useEffect(() => {
        fetchProgress();
    }, []);
    const fetchProgress = async () => {
        try {
            const response = await axios.get("/api/projects/progress");
            setProgress(response.data);
        } catch (error) {
            console.error("Error fetching project progress:", error);
        }
    };
    return (
        <div className="project-progress">
            {" "}
            <h2>Project Progress</h2>{" "}
            <ul>
                {" "}
                {progress.map((project) => (
                    <li key={project.id}>
                        {" "}
                        <p>{project.name}</p> <p>{project.progress}%</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default ProjectProgress;