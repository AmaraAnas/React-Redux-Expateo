import React from 'react';

import Nav from '../pills/nav/nav.container';
import { Container } from '../ui-kit';

const MainLayout = ({ children }) => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'white',
        height: '100vh',
        //   overflowX: 'hidden',
        //   overflowY: 'auto',
      }}
    >
      <Nav>{children}</Nav>
    </Container>
  );
};

export default MainLayout;
