import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SavedQueries.css';

const SavedQueries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
        try {
            const response = await axios.get('/api/queries');
            setQueries(response.data);
        } catch (error) {
            console.error('Error fetching queries:', error);
        }
    };

    return (
        <div className="saved-queries">
            <h2>Saved Queries</h2>
            <ul>
                {queries.map((query) => (
                    <li key={query.id}>
                        <p>{query.query}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedQueries;
