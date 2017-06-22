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
      value="X"
      index={1}
    />);
  });

  it('renders a cell', () => {
    expect(wrapper.hasClass('Cell')).toBe(true);
  });

  it('invokes the callback when clicked', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalledWith(1);
  });

  it('renders the value', () => {
    expect(wrapper.text()).toBe('X');
  });
});
