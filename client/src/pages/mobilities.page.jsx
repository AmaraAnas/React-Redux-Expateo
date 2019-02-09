import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { CardGroup, Image, Header } from '../ui-kit';
import logo from '../images/logo-sans-fond_nopadding.png';
import t from '../i18n';
import MobilityCardView from '../pills/mobilities/mobilityCard.view';

import styles from './mobilities.page.module.css';

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
    <div className={styles.mobilities_page}>
      <div className={styles.logo}>
        <Image as={Link} src={logo} to="/dashboard" />
      </div>
      <div className={styles.mobilities_block}>
        <Header as="h1" textAlign="center">
          {t('pages.mobilites.title')}
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
