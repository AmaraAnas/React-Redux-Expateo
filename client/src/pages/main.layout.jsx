import React from 'react';
import { Container } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container
    fluid
    style={{
      backgroundColor: 'lightgray',
      height: '100vh',
      //   overflowX: 'hidden',
      //   overflowY: 'auto',
    }}
  >
    {children}
  </Container>
);

export default MainLayout;
