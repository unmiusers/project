import React, { useState } from "react";
import axios from "axios";
import "./EditWiki.css";
const EditWiki = ({ page, onSave }) => {
    const [title, setTitle] = useState(page ? page.title : "");
    const [content, setContent] = useState(page ? page.content : "");
    const handleSave = async () => {
        try {
            const response = await axios.put(`/api/wiki/pages/${page.id}`, {
                title,
                content,
            });
            onSave(response.data);
        } catch (error) {
            console.error("Error saving wiki page:", error);
        }
    };
    return (
        <div className="wiki-editor">
            {" "}
            <h2>Edit Wiki Page</h2>{" "}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />{" "}
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            ></textarea>{" "}
            <button onClick={handleSave}>Save</button>{" "}
        </div>
    );
};
export default EditWiki;