import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Options from './Options';
import Grid from './Grid';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders a title', () => {
    expect(wrapper.hasClass('App')).toBe(true);
  });

  it('has an initial state of userOption: null', () => {
    expect(wrapper.state('userOption')).toBe(null);
  });

  it('renders an options page when the user has not chosen X or O', () => {
    expect(wrapper.find(Options)).toHaveLength(1);
  });

  it('renders the game page when the user has chosen X or O', () => {
    wrapper.setState({ userOption: 'X' });
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});
