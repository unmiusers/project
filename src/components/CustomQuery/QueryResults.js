import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QueryResults.css';

const QueryResults = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        try {
            const response = await axios.get('/api/queries/results');
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching query results:', error);
        }
    };

    return (
        <div className="query-results">
            <h2>Query Results</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        <p>{result.data}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QueryResults;
