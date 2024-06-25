import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CodeDiff.css";
const CodeDiff = ({ commitId }) => {
    const [diff, setDiff] = useState("");
    useEffect(() => {
        fetchDiff();
    }, [commitId]);
    const fetchDiff = async () => {
        try {
            const response = await axios.get(`/api/version/commits/${commitId}/diff`);
            setDiff(response.data);
        } catch (error) {
            console.error("Error fetching code diff:", error);
        }
    };
    return (
        <div className="code-diff">
            {" "}
            <h2>Code Diff</h2> <pre>{diff}</pre>{" "}
        </div>
    );
};
export default CodeDiff;