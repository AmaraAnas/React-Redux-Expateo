import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Grid, Image, Message, Segment, Responsive } from 'semantic-ui-react';

import logo from '../images/logo-sans-fond_nopadding.png';
import background from '../images/login-background.jpg';
import AuthForm from '../pills/auth/auth.container';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(user) {
    this.setState({
      redirectToReferrer: user && user.isLogged && user.gSesGuid != 0,
    });
  }

  render() {
    let { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%', background: `url(${background}` }}
        verticalAlign="middle"
      >
        <Grid.Column
          style={{
            maxWidth: '90%',
            width: '550px',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '25px',
          }}
        >
          <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth}>
            <Image src={logo} style={{ padding: '48px' }} />
          </Responsive>
          <AuthForm onLogin={this.handleLoginSubmit} />
          <Message>
            Nouveau ? <Link to="/sign-up">Créer un compte</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
