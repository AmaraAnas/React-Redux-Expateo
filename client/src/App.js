import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from './router/Router';
import './App.css';
import Modal from './pills/modal/modal.container';
import { init } from './App.actions';
import * as AuthApi from './pills/auth/auth.api';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(init());
  }

  componentDidUpdate(prevProps) {
    if (document && prevProps.title !== this.props.title) {
      document.title = this.props.title;
    }
  }

  componentWillUnmount() {
    AuthApi.setSession(this.props.user);
  }

  render() {
    const { isInitDone } = this.props;
    return (
      <div className="App">
        {isInitDone && (
          <React.Fragment>
            <Router />
            <Modal />
          </React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps({ App, Auth }) {
  return {
    ...App,
    user: Auth.user,
  };
}

export default connect(mapStateToProps)(App);
