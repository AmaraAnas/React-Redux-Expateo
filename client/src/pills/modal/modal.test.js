import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import Modal from './modal.container';
import { show, hide, flush } from './modal.actions';
import ModalReducer from './modal.reducer';

describe('Modal render', () => {
  it('Should render', () => {
    shallow(<Modal store={store} />);
  });
});

describe('Modal action - reducers', () => {
  it('SHOW: Should set isOpen to true', () => {
    let state;
    state = ModalReducer(
      { isOpen: false, header: '', content: '', actions: '' },
      show(),
    );
    expect(state).toEqual({
      isOpen: true,
      header: '',
      content: '',
      actions: '',
    });
  });

  it('HIDE: Should set isOpen to false and keep content', () => {
    let state;
    state = ModalReducer(
      { isOpen: true, header: 'a', content: 'b', actions: 'c' },
      hide(),
    );
    expect(state).toEqual({
      isOpen: false,
      header: 'a',
      content: 'b',
      actions: 'c',
    });
  });

  it('FLUSH: Should reset the modal state', () => {
    let state;
    state = ModalReducer(
      { isOpen: true, header: 'a', content: 'b', actions: 'c' },
      flush(),
    );
    expect(state).toEqual({
      isOpen: false,
      header: '',
      content: '',
      actions: '',
    });
  });
});
