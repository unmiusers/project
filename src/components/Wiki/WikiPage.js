import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WikiPage.css";
const WikiPage = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        fetchPages();
    }, []);
    const fetchPages = async () => {
        try {
            const response = await axios.get("/api/wiki/pages");
            setPages(response.data);
        } catch (error) {
            console.error("Error fetching wiki pages:", error);
        }
    };
    return (
        <div className="wiki-content">
            {" "}
            <h2>Wiki</h2>{" "}
            <ul>
                {" "}
                {pages.map((page) => (
                    <li key={page.id}>{page.title}</li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default WikiPage;