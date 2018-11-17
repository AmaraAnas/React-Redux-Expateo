import React from 'react';
import { Grid, Image, Message, Segment, Responsive } from 'semantic-ui-react';

import logo from '../images/logo-sans-fond_nopadding.png';
import background from '../images/login-background.jpg';
import AuthForm from '../pills/auth/auth.container';

const LoginForm = () => (
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
      <AuthForm />
      <Message>
        Nouveau ? <a href="#">Créer un compte</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
