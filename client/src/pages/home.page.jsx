import React from 'react';

import t from '../i18n';
import { Container, Button } from '../ui-kit';
import Logout from '../pills/auth/auth.logout.container';

// import UserDetail from '../pills/user-details/user-details.container';

function LogoutButton({ logout }) {
  return (
    <Button onClick={logout} primary>
      {t('buttons.logout')}
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
