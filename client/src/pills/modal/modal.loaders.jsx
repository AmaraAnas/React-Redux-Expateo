import React from 'react';
import { Loader as SMLoader } from 'semantic-ui-react';

// TODO: Test that functions
const noop = () => {};

export const ErrorModal = ({ title, message }) => ({
  header: <span>{title}</span>,
  content: <p>{message}</p>,
  isBasic: true,
  size: 'mini',
});

export const BigLoaderModal = ({ content }) => ({
  content: <SMLoader size="big">{content}</SMLoader>,
  isBasic: true,
  size: 'small',
  onClose: noop,
});
