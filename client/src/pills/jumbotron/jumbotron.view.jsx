import React from 'react';
import { Button, Header, Icon, Segment, Grid } from '../../ui-kit';
import background from '../../images/jumborton-background.png';
import styles from './jumbotron.module.css';

const SegmentJumbotronView = () => (
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
          J -85
        </Grid.Column>
        <Grid.Column textAlign="left" verticalAlign="middle">
          Votre départ pour Tunisie <br />
          prévu le mardi 25 Mars 2021
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button content="Personaliser ma checklist" icon="signup" size="big" />
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentJumbotronView;
