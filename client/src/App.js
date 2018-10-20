import React, { Component } from 'react';
import { connect } from 'react-redux';

import SimpleLogin from './SimpleLogin';
import logo from './logo.svg';
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
        <header className="App-header">
          <SimpleLogin />
        </header>

        <footer>{this.props.title}</footer>
      </div>
    );
  }
}

function mapStateToProps({ App }) {
  return { title: App.title };
}

export default connect(mapStateToProps)(App);
