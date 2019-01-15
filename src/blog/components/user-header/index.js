import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        {user.name}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // ownProps property allowed through component without state initializing.

  return {
    user: state.users.filter(user => user.id === ownProps.userId)[0],
  };
};

export default connect(mapStateToProps)(UserHeader);
