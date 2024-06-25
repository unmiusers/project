import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssueAttachments = ({ issueId }) => {
    const [attachments, setAttachments] = useState([]);
    const [newAttachment, setNewAttachment] = useState(null);

    useEffect(() => {
        fetchAttachments();
    }, [issueId]);

    const fetchAttachments = async () => {
        try {
            const response = await axios.get(`/api/issues/${issueId}/attachments`);
            setAttachments(response.data);
        } catch (error) {
            console.error('Error fetching attachments:', error);
        }
    };

    const handleFileChange = (e) => {
        setNewAttachment(e.target.files[0]);
    };

    const handleAddAttachment = async () => {
        if (!newAttachment) return;

        const formData = new FormData();
        formData.append('file', newAttachment);

        try {
            const response = await axios.post(`/api/issues/${issueId}/attachments`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setAttachments((prevAttachments) => [...prevAttachments, response.data]);
            setNewAttachment(null);
        } catch (error) {
            console.error('Error adding attachment:', error);
        }
    };

    return (
        <div className="issue-attachments">
            <h2>Attachments</h2>
            <ul>
                {attachments.map((attachment, index) => (
                    <li key={index}>
                        <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                            {attachment.filename}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleAddAttachment}>Add Attachment</button>
            </div>
        </div>
    );
};

export default IssueAttachments;