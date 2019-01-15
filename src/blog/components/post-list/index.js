import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../../actions';
import UserHeader from '../user-header';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPostList() {
    return this.props.posts.map(post => (
      <div key={post.id} className="item">
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>
              {post.title}
            </h2>
            <p>
              {post.body}
            </p>
          </div>
          <UserHeader userId={post.userId} />
        </div> 
      </div>
    ))
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderPostList()}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(PostList);
