import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  it('renders a grid', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Grid player={'X'} onClickCell={spy} />);
    expect(wrapper.hasClass('Grid')).toBe(true);
  });
});
