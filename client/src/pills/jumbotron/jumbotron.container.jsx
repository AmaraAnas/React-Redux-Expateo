import React, { Component } from 'react';
import { connect } from 'react-redux';
import SegmentJumbotronView from './jumbotron.view';

class JumbotronContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mobilitiy } = this.props;
    return <SegmentJumbotronView mobilitiyInfo={mobilitiy} />;
  }
}

function mapStateToProps(state) {
  return {
    mobilitiy: state.Auth.user, //TODO : change state.Auth.user by schema.entities.mobility after merge
  };
}

export default connect(mapStateToProps)(JumbotronContainer);
