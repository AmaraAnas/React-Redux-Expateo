import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from './router/Router';
import Modal from './pills/modal/modal.container';
import { init } from './App.actions';
import { userSelector } from './pills/auth/auth.selectors';

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

  render() {
    const { isInitDone, user } = this.props;
    let indexRedirect = '/login';
    if (isInitDone && user && user.isLogged && user.gSesGuid != 0) {
      indexRedirect = '/dashboard';
    }
    return (
      <div className="App">
        {isInitDone && (
          <React.Fragment>
            <Router indexRedirect={indexRedirect} />
            <Modal />
          </React.Fragment>
        )}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    ...store.App,
    user: userSelector(store),
  };
}

export default connect(mapStateToProps)(App);
