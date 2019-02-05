import React from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';

import t from '../i18n';
import { Container } from '../ui-kit';
import SubscriptionPasswordForm from '../pills/subscription/subscription.passwordForm.container';

import styles from './page.module.css';

export default class SubscriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubscriptionSuccess: false };
    this.query = qs.parse(this.props.location.search);
    this.handleSubscription = this.handleSubscription.bind(this);
  }

  handleSubscription(user) {
    this.setState({
      isSubscriptionSuccess: user && user.isLogged,
    });
  }

  render() {
    let { isSubscriptionSuccess } = this.state;
    if (
      isSubscriptionSuccess ||
      !this.query.family ||
      !this.query.guid ||
      !this.query.cl
    ) {
      return <Redirect to="/mobilities" />;
    }
    return (
      <Container className={styles.container} text fluid>
        <h1 className={styles.title}>{t('pages.subscription.title')}</h1>
        <p className={styles.text}>
          {t('pages.subscription.text_1')} {t('pages.subscription.text_2')}
        </p>
        <SubscriptionPasswordForm
          onSubscription={this.handleSubscription}
          userGuid={this.query.guid}
          familyGuid={this.query.family}
          clGuid={this.query.cl}
        />
      </Container>
    );
  }
}
