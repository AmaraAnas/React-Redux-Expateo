import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from './router/Router';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (document) {
      document.title = 'Expateo - pa';
      this.props.dispatch({
        type: '@APP/INIT',
        payload: {
          title: 'Expateo - pa',
        },
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (document && prevProps.title !== this.props.title) {
      document.title = this.props.title;
    }
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

function mapStateToProps({ App }) {
  return { title: App.title };
}

export default connect(mapStateToProps)(App);
