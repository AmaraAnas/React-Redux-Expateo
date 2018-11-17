import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

function CustomModal({ isOpen, onClose, header, content, actions }) {
  return (
    <Modal open={isOpen} onClose={onClose} basic size="small">
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Actions>{actions}</Modal.Actions>
    </Modal>
  );
}

CustomModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  header: PropTypes.any,
  content: PropTypes.any,
  actions: PropTypes.any,
};

CustomModal.defaultProps = {
  isOpen: false,
};

export default CustomModal;
