import React from 'react';

import Nav from '../pills/nav/nav.container';
import { Container } from '../ui-kit';

const MainLayout = ({ children, isNavVisible }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        //   overflowX: 'hidden',
        //   overflowY: 'auto',
      }}
    >
      {(isNavVisible && <Nav>{children}</Nav>) || children}
    </div>
  );
};

export default MainLayout;
