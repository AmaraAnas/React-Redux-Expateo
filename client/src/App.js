import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wow,the CI/CD workflow is good =)
          </a>
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
