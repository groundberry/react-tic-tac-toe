import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Options from './Options';
import Grid from './Grid';

describe('<App />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = mount(<App />);
    spy = jest.fn();
  });

  it('renders a title', () => {
    expect(wrapper.hasClass('App')).toBe(true);
  });

  it('has an initial state of userOption: ""', () => {
    expect(wrapper.state('userOption')).toBe('');
  });

  it('renders a options page when the user has not chosen X or O', () => {
    expect(wrapper.find(Options).length).toEqual(1);
  });

  it('renders the game page when the user has chosen X or O', () => {
    wrapper.setState({ userOption: 'X' });
    expect(wrapper.find(Grid).length).toEqual(1);
  });
});
