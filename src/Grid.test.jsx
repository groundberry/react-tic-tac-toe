import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = shallow(<Grid
      player={'X'}
      onClickCell={spy}
      board={[]}
    />);
  });

  it('renders a grid', () => {
    expect(wrapper.hasClass('Grid')).toBe(true);
  });

  it('renders 9 cells', () => {
    expect(wrapper.find('Cell')).toHaveLength(9);
  });
});
