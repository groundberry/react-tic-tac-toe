import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('<Grid />', () => {
  it('renders a grid', () => {
    const wrapper = shallow(<Grid player={'X'} />);
    expect(wrapper.hasClass('Grid')).toBe(true);
  });
});
