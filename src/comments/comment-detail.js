import React from 'react';

const CommentDetail = ({ author, avatar }) => {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="data">
              Today at 6:00PM
            </span>
          </div>
          <div className="text">
            Nice blog post!
          </div>
        </div>
      </div>
  );
};

export default CommentDetail;
