import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CloseSession } from '../utils';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    CloseSession();
    let { from } = this.props.location.state || {
      from: { pathname: '/login' },
    };
    this.props.history.push(from);
  }

  render() {
    return (
      <Container text fluid>
        <Button
          onClick={this.handleLogout}
          animated="vertical"
          color="blue"
          fluid
        >
          <Button.Content visible>Déconnecter</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-out" />
          </Button.Content>
        </Button>
      </Container>
    );
  }
}
