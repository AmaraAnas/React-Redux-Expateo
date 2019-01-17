import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Segment, Grid } from '../../../ui-kit';
import Animate from '../../../elements/animate/animate';
import Mobility from '../../../models/mobility.model';

import styles from './nav.desktop.module.css';

export default function SegmentJumbotronView({ mobility }) {
  return (
    <Segment size="large" attached placeholder>
      {mobility ? (
        <Animate animation="fadeInDown">
          <Grid columns={2}>
            {/* <Grid.Row>
              <Label as="a" size="big" style={{ background: 'transparent' }}>
                <Icon name="angle left" /> {t('jumborton.all_mobs')}
              </Label>
            </Grid.Row> */}

            <Grid.Row centered className={styles.title}>
              {mobility.destination}
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column
                textAlign="right"
                verticalAlign="middle"
                className={styles.text}
              >
                <Icon name="calendar alternate outline" />
                {mobility.startDate &&
                  new Date(mobility.startDate).toLocaleDateString()}
              </Grid.Column>
              <Grid.Column
                textAlign="left"
                className={styles.text}
                verticalAlign="middle"
              >
                <Icon name="map marker alternate" />
                {mobility.destination}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Animate>
      ) : null}
    </Segment>
  );
}

SegmentJumbotronView.propTypes = {
  mobility: PropTypes.instanceOf(Mobility),
};
