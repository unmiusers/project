import React, { useState } from 'react';
import axios from 'axios';

const IssueComments = ({ issueId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetchComments();
    }, [issueId]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/issues/${issueId}/comments`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleAddComment = async () => {
        try {
            const response = await axios.post(`/api/issues/${issueId}/comments`, { text: newComment });
            setComments((prevComments) => [...prevComments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className="issue-comments">
            <h2>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
            ></textarea>
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default IssueComments;