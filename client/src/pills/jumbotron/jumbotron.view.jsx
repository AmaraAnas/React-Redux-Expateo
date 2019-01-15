import React from 'react';
import { Button, Header, Icon, Segment, Grid } from '../../ui-kit';
import background from '../../images/jumborton-background.png';
import styles from './jumbotron.module.css';
import t from '../../i18n';

let userInfos = {
  destination: 'Tunisie',
  date: 'mardi 25 Mars 2021',
  remainingDays: '-81',
};

const SegmentJumbotronView = () => {
  return (
    <Segment
      padded="very"
      size="massive"
      attached
      className={styles.backgroudImagePosition}
      style={{ background: `url(${background}` }}
    >
      <Grid centered columns={2} divided>
        <Grid.Row>
          <Grid.Column textAlign="right" verticalAlign="middle">
            {t('jumborton.remainingDays_text')} {userInfos.remainingDays}
          </Grid.Column>
          <Grid.Column textAlign="left" verticalAlign="middle">
            {t('jumborton.destination_text')} {userInfos.destination} <br />
            {t('jumborton.date_text')} {userInfos.date}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Button
            content={t('jumborton.button_text')}
            icon="signup"
            size="big"
          />
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SegmentJumbotronView;
