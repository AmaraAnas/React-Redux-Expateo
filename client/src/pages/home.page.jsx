import React from 'react';

import t from '../i18n';
import { Container, Button } from '../ui-kit';
import Logout from '../pills/auth/auth.logout.container';

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
  </Container>
);

export default HomePage;
