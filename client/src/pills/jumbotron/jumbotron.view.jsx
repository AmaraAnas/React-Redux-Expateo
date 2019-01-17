import React from 'react';
import { Button, Header, Icon, Segment, Grid, Label } from '../../ui-kit';
import background from '../../images/jumborton-background.png';
import styles from './jumbotron.module.css';
import t from '../../i18n';

let userInfos = {
  mobilityTitle: 'Titre de la mobilité',
  destination: 'Tunisie',
  date: '30/02/2019',
};

const SegmentJumbotronView = () => {
  return (
    <Segment size="large" attached placeholder>
      <Grid columns={2}>
        {/*
        <Grid.Row>
          <Label as="a" size="big" style={{ background: "transparent"}}>
            <Icon name='angle left' /> {t('jumborton.all_mobs')}
          </Label> 
        </Grid.Row> 
      */}

        <Grid.Row centered className={styles.title}>
          {userInfos.mobilityTitle}
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column
            textAlign="right"
            verticalAlign="middle"
            className={styles.text}
          >
            <Icon name="calendar alternate outline" />
            {userInfos.date}
          </Grid.Column>
          <Grid.Column
            textAlign="left"
            className={styles.text}
            verticalAlign="middle"
          >
            <Icon name="map marker alternate" />
            {userInfos.destination}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default SegmentJumbotronView;
