import React from 'react';
import { List } from 'semantic-ui-react';

export function PasswordCriterias({ password, validators }) {
  return (
    <div>
      Pour plus de sécurité, votre mot de passe doit obligatoirement contenir:
      <List style={{ paddingLeft: '20px', paddingTop: '5px' }}>
        <List.Item
          style={{
            color:
              validators[1](password) !== undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 12 caractères minimum
        </List.Item>
        <List.Item
          style={{
            color:
              validators[2](password) !== undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 6 caractères alphabétiques
        </List.Item>
        <List.Item
          style={{
            color:
              validators[3](password) !== undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 2 caractères numériques
        </List.Item>
        <List.Item
          style={{
            color:
              validators[4](password) !== undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 1 caractère spécial
        </List.Item>
        <List.Item
          style={{
            color:
              validators[5](password) !== undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 1 caractère majuscule
        </List.Item>
        <List.Item
          style={{
            color: validators[6](password) != undefined ? '#FF0000' : '#007F00',
          }}
        >
          - 1 caractère minuscule
        </List.Item>
      </List>
    </div>
  );
}
