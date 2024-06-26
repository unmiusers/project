import React from 'react';
import CreateQuery from '../../components/CustomQuery/CreateQuery';
import SavedQueries from '../../components/CustomQuery/SavedQueries';
import QueryResults from '../../components/CustomQuery/QueryResults';
import './QueryPage.css';

const QueryPage = () => {
    return (
        <div className="query-page">
            <h1>Custom Queries</h1>
            <CreateQuery />
            <SavedQueries />
            <QueryResults />
        </div>
    );
};

export default QueryPage;
