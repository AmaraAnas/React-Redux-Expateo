import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { Card, Image } from '../ui-kit';
import logo from '../images/logo-sans-fond_nopadding.png';

// TODO: extract style
// TODO: i18n
// TODO: handle the mobility status
// TODO: Maybe redesign cards ??
// TODO: mobilities/new -> mobilities/activation
export default function MobilitiesPage() {
  const [currentMobility, setStateCurrentMobility] = useState(null);
  if (currentMobility && currentMobility.isCurrent) {
    return (
      <Redirect
        from="/mobilities"
        push={true}
        to={currentMobility.isInitialized ? '/dashboard' : '/mobilities/new'}
      />
    );
  }

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
        <h1>Séléction de la mobilité: </h1>
        <MobilitiesContainer
          render={({ mobilities, setCurrentMobility }) => (
            <Card.Group>
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
            </Card.Group>
          )}
        />
      </div>
    </div>
  );
}
// INFO: we have to wait the end o the request before navigate as the nav bar do no re-request after a dispatch as the hooks do not rerender because they are not listening the currentMobility change ! see useEffect(() =>{}, inputs= ????Maybe it should be bind to currentMobilities to reftch, but it's a double request as we do not avoid the first requests started too earlier OR BLOCK THIS DAMN NAVIGATION WITH A LOADER YOU LAZYY FUCKER ! )
