import React, { useState } from "react";
import axios from "axios";
import "./CreateQuery.css";
const CreateQuery = ({ onSave }) => {
    const [query, setQuery] = useState({ name: "", filters: [] });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuery((prevQuery) => ({ ...prevQuery, [name]: value }));
    };
    const handleSaveQuery = async () => {
        try {
            const response = await axios.post("/api/queries", query);
            onSave(response.data);
        } catch (error) {
            console.error("Error saving query:", error);
        }
    };
    return (
        <div className="create-query">
            {" "}
            <h2>Create Custom Query</h2>{" "}
            <input
                type="text"
                name="name"
                value={query.name}
                onChange={handleInputChange}
                placeholder="Query Name"
            />{" "}
            <textarea
                name="filters"
                value={query.filters}
                onChange={handleInputChange}
                placeholder="Filters (JSON format)"
            ></textarea>{" "}
            <button onClick={handleSaveQuery}>Save Query</button>{" "}
        </div>
    );
};
export default CreateQuery;