import React from 'react';
import { Browser } from 'react-kawaii';
import { Container, Header, Grid } from 'semantic-ui-react';

const NotFound = () => (
  <Container
    fluid
    style={{
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Header as="h2">Oupsss !! </Header>
    <Browser size={200} mood="shocked" color="#61DDBC" />
  </Container>
);

export default NotFound;
