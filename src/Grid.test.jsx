import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;
  let spy;
  let spyStart;

  beforeEach(() => {
    spy = jest.fn();
    spyStart = jest.fn();
    wrapper = shallow(<Grid
      player={'X'}
      onClickCell={spy}
      board={[]}
      onClickStartGame={spyStart}
      winner={null}
    />);
  });

  it('renders a grid', () => {
    expect(wrapper.hasClass('Grid')).toBe(true);
  });

  it('renders 9 cells', () => {
    expect(wrapper.find('Cell')).toHaveLength(9);
  });

  it('renders the winner of the game', () => {
    expect(wrapper.hasClass('Grid-winner')).toBe(false);
  });
});
