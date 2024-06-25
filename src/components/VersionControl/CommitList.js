import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CommitList.css";
const CommitList = () => {
    const [commits, setCommits] = useState([]);
    useEffect(() => {
        fetchCommits();
    }, []);
    const fetchCommits = async () => {
        try {
            const response = await axios.get("/api/version/commits");
            setCommits(response.data);
        } catch (error) {
            console.error("Error fetching commits:", error);
        }
    };
    return (
        <div className="commit-list">
            {" "}
            <h2>Commit List</h2>{" "}
            <ul>
                {" "}
                {commits.map((commit) => (
                    <li key={commit.id}>
                        {" "}
                        <p>{commit.message}</p> <p>{commit.author}</p> <p>{commit.date}</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default CommitList;