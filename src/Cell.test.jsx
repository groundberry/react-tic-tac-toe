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

  it('does not invoque the callback when there is a value', () => {
    wrapper.simulate('click');
    expect(spy).not.toBeCalledWith(1);
  });

  it('renders the value', () => {
    expect(wrapper.text()).toBe('X');
  });
});

describe('<Cell />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = mount(<Cell
      className="Cell"
      onClick={spy}
      value={null}
      index={1}
    />);
  });

  it('invokes the callback when there is not a value', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalledWith(1);
  });
});
