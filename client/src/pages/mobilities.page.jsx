import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { CardGroup, Image, Header } from '../ui-kit';
import logo from '../images/logo-sans-fond_nopadding.png';
import MobilityCardView from '../pills/mobilities/mobilityCard.view';

// TODO: extract style
// TODO: i18n
// TODO: handle the mobility status
// TODO: Maybe redesign cards ??
export default function MobilitiesPage() {
  const [currentMobility, setStateCurrentMobility] = useState(null);
  if (currentMobility && currentMobility.isCurrent) {
    return (
      <Redirect
        from="/mobilities"
        push={true}
        to={
          currentMobility.isInitialized
            ? '/dashboard'
            : '/mobilities/activation'
        }
      />
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        background: '#f3f3f3',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: '18px',
          left: '20px',
          width: '170px',
        }}
      >
        <Image as={Link} src={logo} to="/dashboard" />
      </div>
      <div style={{ margin: '95px' }}>
        <Header as="h1" textAlign="center">
          Séléction de la mobilité:
        </Header>
        <MobilitiesContainer
          render={({ mobilities, setCurrentMobility }) => (
            <CardGroup>
              {mobilities.map((mobility) => (
                <MobilityCardView
                  key={mobility.id}
                  onClick={() =>
                    setCurrentMobility(mobility).then((currentMobility) =>
                      setStateCurrentMobility(currentMobility),
                    )
                  }
                  mobility={mobility}
                />
              ))}
            </CardGroup>
          )}
        />
      </div>
    </div>
  );
}
// INFO: we have to wait the end o the request before navigate as the nav bar do no re-request after a dispatch as the hooks do not rerender because they are not listening the currentMobility change ! see useEffect(() =>{}, inputs= ????Maybe it should be bind to currentMobilities to reftch, but it's a double request as we do not avoid the first requests started too earlier OR BLOCK THIS DAMN NAVIGATION WITH A LOADER YOU LAZYY FUCKER ! )
