import React from 'react';

import Nav from '../pills/nav/nav.container';

const MainLayout = ({ children, isNavVisible }) => {
  return (
    <div className="main-layout">
      {(isNavVisible && <Nav>{children}</Nav>) || children}
    </div>
  );
};

export default MainLayout;
