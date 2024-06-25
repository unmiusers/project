import React, { useState } from "react";
import axios from "axios";
import "./TimeLogEntry.css";
const TimeLogEntry = ({ onEntryAdded }) => {
    const [entry, setEntry] = useState({ description: "", hours: "" });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
    };
    const handleAddEntry = async () => {
        try {
            const response = await axios.post("/api/timelog", entry);
            onEntryAdded(response.data);
            setEntry({ description: "", hours: "" });
        } catch (error) {
            console.error("Error adding time log entry:", error);
        }
    };
    return (
        <div className="time-log-entry">
            {" "}
            <h2>Add Time Log Entry</h2>{" "}
            <textarea
                name="description"
                value={entry.description}
                onChange={handleInputChange}
                placeholder="Description"
            ></textarea>{" "}
            <input
                type="number"
                name="hours"
                value={entry.hours}
                onChange={handleInputChange}
                placeholder="Hours"
            />{" "}
            <button onClick={handleAddEntry}>Add Entry</button>{" "}
        </div>
    );
};
export default TimeLogEntry;