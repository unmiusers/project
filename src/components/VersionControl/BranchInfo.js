import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BranchInfo.css";
const BranchInfo = () => {
    const [branches, setBranches] = useState([]);
    useEffect(() => {
        fetchBranches();
    }, []);
    const fetchBranches = async () => {
        try {
            const response = await axios.get("/api/version/branches");
            setBranches(response.data);
        } catch (error) {
            console.error("Error fetching branches:", error);
        }
    };
    return (
        <div className="branch-info">
            {" "}
            <h2>Branch Info</h2>{" "}
            <ul>
                {" "}
                {branches.map((branch) => (
                    <li key={branch.name}>{branch.name}</li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default BranchInfo;