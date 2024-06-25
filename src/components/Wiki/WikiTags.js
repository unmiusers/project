import React from "react";
import "./WikiTags.css";
const WikiTags = ({ tags, onTagClick }) => {
    return (
        <div className="wiki-tags">
            {" "}
            {tags.map((tag, index) => (
                <span key={index} className="tag" onClick={() => onTagClick(tag)}>
          {" "}
                    {tag}{" "}
        </span>
            ))}{" "}
        </div>
    );
};
export default WikiTags;