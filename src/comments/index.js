import React from 'react';
import CommentDetail from './comment-detail';
import ApprovalCard from './approval-card';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;