import React from 'react';

import { Container } from '../ui-kit';

const MainLayout = ({ children }) => (
  <Container
    fluid
    style={{
      backgroundColor: 'white',
      height: '100vh',
      //   overflowX: 'hidden',
      //   overflowY: 'auto',
    }}
  >
    {children}
  </Container>
);

export default MainLayout;
