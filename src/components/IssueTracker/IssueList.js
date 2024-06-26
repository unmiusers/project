import React from 'react';
import IssueTimeLog from './IssueTimeLog';
import IssueAttachments from './IssueAttachments';

const IssueList = () => {
    return (
        <div>
            <h2>Issue List</h2>
            {/* 示例问题列表条目 */}
            <div className="issue-item">
                <h3>Issue 1</h3>
                <p>Description of issue 1</p>
                <IssueTimeLog />
                <IssueAttachments />
            </div>
            <div className="issue-item">
                <h3>Issue 2</h3>
                <p>Description of issue 2</p>
                <IssueTimeLog />
                <IssueAttachments />
            </div>
            {/* 可以根据实际需求动态生成问题列表 */}
        </div>
    );
};

export default IssueList;
