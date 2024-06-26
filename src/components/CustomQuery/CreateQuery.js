import React, { useState } from 'react';
import axios from 'axios';
import './CreateQuery.css';

const CreateQuery = () => {
    const [query, setQuery] = useState('');

    const handleCreateQuery = async () => {
        try {
            const response = await axios.post('/api/queries', { query });
            console.log('Query created:', response.data);
        } catch (error) {
            console.error('Error creating query:', error);
        }
    };

    return (
        <div className="create-query">
            <h2>Create Query</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter query"
            />
            <button onClick={handleCreateQuery}>Create Query</button>
        </div>
    );
};

export default CreateQuery;
