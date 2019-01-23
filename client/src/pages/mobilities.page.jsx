import React from 'react';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Grid, Image, Segment } from 'semantic-ui-react';
import logo from '../images/logo-sans-fond_nopadding.png';

//TODO: finish this page
export default function({ match, location }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f3f3f3',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '18px',
          left: '20px',
          width: '170px',
        }}
      >
        <Image as={Link} src={logo} to="/dashboard" />
      </div>
      <div style={{ margin: '95px' }}>
        <h1>Séléction de la mobitlité: </h1>
        <MobilitiesContainer
          render={({ mobilities }) => (
            <Card.Group>
              {mobilities.map((mobility) => (
                <Card
                  key={mobility.id}
                  raised
                  header={mobility.title}
                  meta="en attente"
                  description={mobility.destination}
                  extra={new Date(mobility.startDate).toLocaleDateString()}
                  as={Link}
                  to="/dashboard"
                />
              ))}
              {mobilities.map((mobility) => (
                <Card
                  key={mobility.id}
                  raised
                  header={mobility.title}
                  meta="en attente"
                  description={mobility.destination}
                  extra={new Date(mobility.startDate).toLocaleDateString()}
                  as={Link}
                  to="/dashboard"
                />
              ))}
              {mobilities.map((mobility) => (
                <Card
                  key={mobility.id}
                  raised
                  header={mobility.title}
                  meta="en attente"
                  description={mobility.destination}
                  extra={new Date(mobility.startDate).toLocaleDateString()}
                  as={Link}
                  to="/dashboard"
                />
              ))}
            </Card.Group>
          )}
        />
      </div>
    </div>
  );
}
