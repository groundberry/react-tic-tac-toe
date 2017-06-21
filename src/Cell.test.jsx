import React from 'react';
import { mount } from 'enzyme';
import Cell from './Cell';

describe('<Cell />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = mount(<Cell
      className="Cell"
      onClick={spy}
    />);
  });

  it('renders a cell', () => {
    expect(wrapper.hasClass('Cell')).toBe(true);
  });

  it('invoques the callback when clicked', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalled();
  });
});
