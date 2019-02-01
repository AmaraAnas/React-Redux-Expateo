import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MobilitiesContainer from '../pills/mobilities/mobilities.container';
import { Card, Image, Segment } from '../ui-kit';
import logo from '../images/logo-sans-fond_nopadding.png';
import t from '../i18n';

import styles from './mobilities.page.module.css';

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
    <div className={styles.mobilities_page}>
      <div className={styles.logo}>
        <Image as={Link} src={logo} to="/dashboard" />
      </div>
      <div className={styles.mobilities_block}>
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
                    meta={t('pages.mobilites.status.wait')}
                    description={mobility.destination}
                    extra={new Date(mobility.startDate).toLocaleDateString()}
                    color={mobility.isCurrent ? 'green' : 'red'}
                  />
                ) : (
                  <Segment
                    key={mobility.id}
                    header={mobility.title}
                    meta={t('pages.mobilites.status.inactive')}
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
