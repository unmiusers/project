import React from "react";
import "./QueryResults.css";
const QueryResults = ({ results }) => {
    return (
        <div className="query-results">
            {" "}
            <h2>Query Results</h2>{" "}
            <ul>
                {" "}
                {results.map((result, index) => (
                    <li key={index}>
                        {" "}
                        <p>{result.title}</p> <p>{result.status}</p>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
};
export default QueryResults;