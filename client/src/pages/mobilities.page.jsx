import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { Card, Image, Segment } from '../ui-kit';
import logo from '../images/logo-sans-fond_nopadding.png';
import t from '../i18n';

// TODO: extract style
// TODO: i18n
// TODO: handle then mobility status
// TODO: Maybe redisgn cards ??
export default function MobilitiesPage() {
  const [
    isSetCurrentMobilitySuccess,
    setIsSetCurrentMobilitySuccess,
  ] = useState(false);
  if (isSetCurrentMobilitySuccess) {
    return <Redirect from="/mobilities" push={true} to="/dashboard" />;
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
        <h1>{t('pages.mobilites.title')} </h1>
        <MobilitiesContainer
          render={({ mobilities, setCurrentMobility }) => (
            <Card.Group>
              {mobilities.map((mobility) =>
                mobility.isInitialized ? (
                  <Card
                    key={mobility.id}
                    onClick={() =>
                      setCurrentMobility(mobility).then(() =>
                        setIsSetCurrentMobilitySuccess(true),
                      )
                    }
                    header={mobility.title}
                    meta="en attente"
                    description={mobility.destination}
                    extra={new Date(mobility.startDate).toLocaleDateString()}
                    color={mobility.isCurrent ? 'green' : 'red'}
                  />
                ) : (
                  <Segment
                    key={mobility.id}
                    header={mobility.title}
                    meta="inactive"
                    description={mobility.destination}
                    disabled
                    as={Card}
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
// TODO: we have to wait the end o the request before navigate as the nav bar do no re-request after a dispatch as the hooks do not rerender because they are not listening the currentMobility change ! see useEffect(() =>{}, inputs= ????Maybe it should be bind to currentMobilities to reftch, but it's a double request as we do not avoid the first requests started too earlier OR BLOCK THIS DAMN NAVIGATION WITH A LOADER YOU LAZYY FUCKER ! )
