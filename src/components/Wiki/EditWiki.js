import React, { useState } from 'react';
import axios from 'axios';
import './EditWiki.css';

const EditWiki = () => {
    const [content, setContent] = useState('');

    const handleSave = async () => {
        try {
            const response = await axios.post('/api/wiki/save', { content });
            console.log('Wiki content saved:', response.data);
        } catch (error) {
            console.error('Error saving wiki content:', error);
        }
    };

    return (
        <div className="edit-wiki">
            <h2>Edit Wiki</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Edit wiki content here..."
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditWiki;
