import React from 'react';

import { Container, Button } from '../ui-kit';
import Logout from '../pills/auth/auth.logout.container';
// import UserDetail from '../pills/user-details/user-details.container';

function LogoutButton({ logout }) {
  return (
    <Button onClick={logout} primary>
      Se déconnecter
    </Button>
  );
}

const HomePage = () => (
  <Container text fluid>
    <Logout render={LogoutButton} />
    {/* <UserDetail /> */}
  </Container>
);

export default HomePage;
