import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoView from './user-details.view';
import { getUserInfo } from './user-details.actions';

class UserDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.getUserData();
  }

  getUserData = () => {
    const { dispatch, user } = this.props;
    dispatch(
      getUserInfo({
        user,
        onSuccess: (user) => {},
        onFailure: (e) => {},
      }),
    );
  };

  render() {
    const { userInfo } = this.props;

    return <UserInfoView userInfo={userInfo} />;
  }
}
function mapStateToProps(state) {
  return {
    user: state.Auth.user,
    userInfo: state.UserData.userInfo,
  };
}

export default connect(mapStateToProps)(UserDetailsContainer);
