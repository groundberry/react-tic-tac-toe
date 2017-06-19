import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('<Cell />', () => {
  it('renders a cell', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.hasClass('Cell')).toBe(true);
  });
});
