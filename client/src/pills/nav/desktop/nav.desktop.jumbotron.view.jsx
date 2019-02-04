import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../../i18n';
import { Icon, Segment, Grid, Label } from '../../../ui-kit';
import Animate from '../../../elements/animate/animate';
import Mobility from '../../../models/mobility.model';

import styles from './nav.desktop.module.css';

// TODO: label to navigate
export default function SegmentJumbotronView({ mobility }) {
  return (
    <Segment size="large" attached placeholder>
      <Label
        as={Link}
        to="/mobilities"
        style={{
          background: 'transparent',
          color: '#707070',
          fontSize: '18px',
          fontWeight: '300',
          position: 'absolute',
          top: '30px',
          left: '30px',
          padding: '0',
        }}
      >
        <Icon name="chevron left" /> {t('jumborton.all_mobs')}
      </Label>
      {mobility ? (
        <Animate animation="fadeInDown">
          <Grid columns={2}>
            <Grid.Row centered className={styles.title}>
              {mobility.title}
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
