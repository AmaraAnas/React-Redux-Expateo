import React from 'react';
import {
  Button,
  Form,
  Grid,
  Icon,
  Image,
  Message,
  Segment,
  Responsive,
} from 'semantic-ui-react';

import logo from '../images/logo-sans-fond_nopadding.png';
import background from '../images/login-background.jpg';

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

      <Form size="large">
        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button animated="vertical" color="blue" fluid size="large">
            <Button.Content visible>S'identifier</Button.Content>
            <Button.Content hidden>
              <Icon name="check" />
            </Button.Content>
          </Button>
        </Segment>
      </Form>
      <Message>
        Nouveau ? <a href="#">Créer un compte</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
