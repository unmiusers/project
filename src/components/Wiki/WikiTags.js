import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WikiTags.css';

const WikiTags = () => {
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        try {
            const response = await axios.get('/api/wiki/tags');
            setTags(response.data);
        } catch (error) {
            console.error('Error fetching wiki tags:', error);
        }
    };

    const handleAddTag = async () => {
        try {
            const response = await axios.post('/api/wiki/tags', { tag: newTag });
            setTags([...tags, response.data]);
            setNewTag('');
        } catch (error) {
            console.error('Error adding tag:', error);
        }
    };

    return (
        <div className="wiki-tags">
            <h2>Wiki Tags</h2>
            <ul>
                {tags.map((tag) => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="New tag"
            />
            <button onClick={handleAddTag}>Add Tag</button>
        </div>
    );
};

export default WikiTags;
