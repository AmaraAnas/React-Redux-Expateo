import React from 'react';

import { Loader as SMLoader, Button } from '../../ui-kit';

// TODO: Test that functions
const noop = () => {};

export const ErrorModal = ({ title, message, ...rest }) => ({
  header: <span>{title}</span>,
  content: <p>{message}</p>,
  isBasic: true,
  size: 'mini',
  ...rest,
});

export const BigLoaderModal = ({ content, ...rest }) => ({
  content: <SMLoader size="big">{content}</SMLoader>,
  isBasic: true,
  size: 'small',
  onClose: noop,
  ...rest,
});

export const ConfirmModal = ({ title, message, onYes, onNo, ...rest }) => ({
  header: <span>{title}</span>,
  content: <p>{message}</p>,
  isBasic: true,
  size: 'mini',
  actions: [
    <Button key="no" onClick={onNo}>
      No
    </Button>,
    <Button key="yes" primary onClick={onYes}>
      Yes
    </Button>,
  ],
  ...rest,
});
