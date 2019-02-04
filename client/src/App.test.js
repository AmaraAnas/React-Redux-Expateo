import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import AppReducer from './App.reducer';
import { setTitle, init } from './App.actions';

describe('App render', () => {
  it('Should render', () => {
    expect(shallow(<App />)).toBeDefined();
  });
});

describe('App action - reducers', () => {
  it('SET_TITLE: Should set document title', () => {
    let state = AppReducer({ title: 'Hello' }, setTitle('Expateo'));
    expect(state).toEqual({ title: 'Expateo' });
  });
});
