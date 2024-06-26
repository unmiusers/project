import React, { useEffect, useState } from 'react';
import EditWiki from '../../components/Wiki/EditWiki';
import WikiTags from '../../components/Wiki/WikiTags';
import axios from 'axios';
import './WikiPage.css';

const WikiPage = () => {
    const [wikiContent, setWikiContent] = useState('');

    useEffect(() => {
        fetchWikiContent();
    }, []);

    const fetchWikiContent = async () => {
        try {
            const response = await axios.get('/api/wiki/content');
            setWikiContent(response.data);
        } catch (error) {
            console.error('Error fetching wiki content:', error);
        }
    };

    return (
        <div className="wiki-page">
            <h1>Wiki</h1>
            <div className="wiki-content">
                {wikiContent}
            </div>
            <EditWiki />
            <WikiTags />
        </div>
    );
};

export default WikiPage;
