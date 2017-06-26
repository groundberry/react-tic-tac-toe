import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Options from './Options';
import Grid from './Grid';

jest.useFakeTimers();

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders a title', () => {
    expect(wrapper.hasClass('App')).toBe(true);
  });

  describe('when the user has not chosen X or O', () => {
    it('has an initial state of userOption: null', () => {
      expect(wrapper.state('userOption')).toBe(null);
    });

    it('renders an options page', () => {
      expect(wrapper.find(Options)).toHaveLength(1);
    });
  });

  describe('when the user has chosen X or O', () => {
    beforeEach(() => {
      wrapper.setState({ userOption: 'X' });
    });

    it('renders the game page', () => {
      expect(wrapper.find(Grid)).toHaveLength(1);
    });

    it('finds nine cell', () => {
      expect(wrapper.find('Cell')).toHaveLength(9);
    });

    it('waits 1 second before changing the state', () => {
      const prevState = wrapper.state('grid');

      wrapper.find('Cell').first().simulate('click');
      jest.runTimersToTime(1000);

      expect(wrapper.state('grid')).not.toEqual(prevState);
    });
  });
});
