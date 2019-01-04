import React from 'react';
import get from 'lodash.get';

// IDEA: Use Proxy to get automatic check and keys ?
// TODO: Finish the extraction of all the texts
const texts = {
  login: 'se connecter',
  logout: 'se deconnecter',
  access_to_home: 'Accèdez a son espace personel',
  form: {
    start_date: 'votre date de départ',
  },
  pages: {
    inscription: {
      title: 'Bienvenue sur votre espace personnel Expateo',
      text_1:
        'Grâce à votre entreprise vous allez bénéficier d’un accompagnement pour vous aider étape par étape dans votre mobilité.',
      text_2:
        'Pour y accéder créez votre mot de passe et répondez aux questions nécessaires au bon fonctionnement de l’application',
    },
  },
};

const TError = ({ text }) => (
  <div style={{ color: 'red', border: '1px solid gray', background: 'black' }}>
    i18n error: {text} doesn't exist
  </div>
);

const t = (texts) => (key) => {
  let value = get(texts, key);
  return typeof value === 'string' ? value : <TError text={key} />;
};

export default t(texts);
