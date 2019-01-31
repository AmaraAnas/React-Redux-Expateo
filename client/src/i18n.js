import React from 'react';
import get from 'lodash.get';

// IDEA: Use Proxy to get automatic check and keys ?
// TODO: Finish the extraction of all the texts
const texts = {
  form: {
    cgu:
      "J'accepte les <a href='https://expateo.com/fr/conditions-generales-vente' rel='noopener noreferrer' target='_blank'>CGU</a>",
    ad: "J'accepte de recevoir des mails d'Expateo et de ses partenaires",
    fields: {
      start_date: {
        label: 'date de départ de la mobilité',
        placeholder: 'date de votre départ pour cette mobilité',
      },
      family: {
        label: 'Votre situation familiale au départ',
        placeholder: 'Partez vous seul.e ou accompagné.e ?',
      },
      conjoint: {
        label: 'Prénom de votre conjoint',
        placeholder: 'Indiquer le prénom de votre conjoint qui part avec vous',
      },
      password: {
        label: 'Mot de passe',
        placeholder: 'Ecrire votre mot de passe en respectant les conditions',
      },
      confirmpassword: {
        label: 'Confirmation du mot de passe',
        placeholder: 'Confirmez votre mot de passe',
      },
      childcount: {
        label: 'Partez vous avec des enfants ?',
        placeholder: 'Indiquer le nombre des enfants qui partent avec vous',
      },
    },
    submit: {
      inscription: 'Accéder à mon espace personnel',
      login: "S'identifier",
      save_mobility: 'VALIDER CES INFORMATIONS',
    },
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
  buttons: {
    logout: 'Se déconnecter',
  },
  modals: {
    logout_confirm_title: 'Déconnexion',
    logout_confirm_message: 'Êtes vous sûr de vous déconnecter ?',
    confirm: {
      yes: 'Oui, je suis sûr',
      no: 'Annuler',
    },
    alert: {
      ok: 'OK',
    },
    login_pending: 'Chargement en cours, veuillez patienter',
    login_error_title: 'Authentification échouée',
    login_error_message:
      "L'email et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers. Veuillez vérifier et réessayer.",
  },
  menu: {
    documents: 'Documents',
    messages: 'Messages',
    notifications: 'Notifications',
    subNav: {
      themes: 'Thèmes',
      services: 'Services',
      obligation: 'Obligatoires',
      optionnel: 'Optionnels',
      factures: 'Devis & Factures',
    },
  },
  jumborton: {
    all_mobs: 'voir toutes mes mobilités',
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
