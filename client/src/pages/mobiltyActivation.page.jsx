import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from '../ui-kit';
import MobilityActivationForm from '../pills/mobilities/mobilities.activationForm.container';

import styles from './page.module.css';

export default function MobilityActivationPage() {
  const [isMobilityActivated, setIsMobilityActivated] = useState(false);
  if (isMobilityActivated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container className={styles.container} text fluid>
      <MobilityActivationForm
        onMobilityActivation={() => setIsMobilityActivated(true)}
      />
    </Container>
  );
}
