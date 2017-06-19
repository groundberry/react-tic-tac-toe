import React from 'react';
import { shallow } from 'enzyme';
import Options from './Options';

describe('<Options />', () => {
  let wrapper;

  beforeEach(() => {
    const spyX = jest.fn();
    const spyY = jest.fn();
    wrapper = shallow(<Options onClickChooseX={spyX} onClickChooseO={spyY} />);
  });

  it('has class "Options"', () => {
    expect(wrapper.hasClass('Options')).toBe(true);
  });

  it('renders a title', () => {
    expect(wrapper.text('Options')).toContain('What do you choose?');
  });
});
