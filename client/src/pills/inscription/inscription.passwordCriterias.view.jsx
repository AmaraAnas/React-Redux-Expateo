import React from 'react';
import { List } from 'semantic-ui-react';

import Animate from '../../elements/animate/animate.jsx';

export default function PasswordCriterias({ password, criterias }) {
  return (
    <div>
      Pour plus de sécurité, votre mot de passe doit obligatoirement contenir:
      <br />
      <List bulleted>
        {criterias.map(({ label, validator }, i) => (
          <Animate
            animation={
              validator(password) === undefined ? 'fadeOutRight' : 'fadeInRight'
            }
            key={i}
          >
            <List.Item>{label}</List.Item>
          </Animate>
        ))}
      </List>
    </div>
  );
}
