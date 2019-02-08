import React from 'react';
import PropTypes from 'prop-types';

import { Card, Label, List } from '../../ui-kit';
import Mobility from '../../models/mobility.model';

/* <Card.Group>
              {mobilities.map((mobility) =>
                mobility.isInitialized ? (
                  <Card
                    key={mobility.id}
                    onClick={() =>
                      setCurrentMobility(mobility).then((currentMobility) =>
                        setStateCurrentMobility(currentMobility),
                      )
                    }
                    header={mobility.title}
                    meta="en attente"
                    description={mobility.destination}
                    extra={new Date(mobility.startDate).toLocaleDateString()}
                    color={mobility.isCurrent ? 'teal' : 'red'}
                  />
                ) : (
                  <Card
                    key={mobility.id}
                    onClick={() =>
                      setCurrentMobility(mobility).then((currentMobility) =>
                        setStateCurrentMobility(currentMobility),
                      )
                    }
                    header={mobility.title}
                    meta="NEW"
                    description={mobility.destination}
                    extra={new Date(mobility.startDate).toLocaleDateString()}
                    color="yellow"
                  />
                ),
              )}
            </Card.Group> */

function MobilityCardView({
  mobility: {
    title,
    status,
    destination,
    startDate,
    lastSeenDate,
    isInitialized,
    isCurrent,
  },
  ...rest
}) {
  return (
    <Card color={isCurrent ? 'teal' : 'red'} {...rest}>
      <Card.Content>
        {!isInitialized && (
          <Label color="red" corner="right">
            <span
              style={{
                display: 'inline-block',
                transform: 'rotateZ(45deg) translate(10px)',
              }}
            >
              New
            </span>
          </Label>
        )}

        <Card.Header>{title}</Card.Header>
        <Card.Meta>en attente (status) | lastSeenDate</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <List size="large">
            <List.Item>
              <List.Icon name="map marker alternate" />
              <List.Content>{destination}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="calendar alternate" />
              <List.Content>
                {new Date(startDate).toLocaleDateString()}
              </List.Content>
            </List.Item>
          </List>
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="center">
        <a>+ d'info</a>
      </Card.Content>
    </Card>
  );
}

MobilityCardView.propTypes = {
  mobility: PropTypes.instanceOf(Mobility).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobilityCardView;
