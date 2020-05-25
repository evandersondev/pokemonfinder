/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';

import Home from '../pages/Home';

describe('test render components in Home', () => {
  it('should be a Link at Home', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('should have two links', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('Link').length).toBe(2);
  });

  it('should a Link with name Previous and Next', () => {
    const wrapper = shallow(<Home />);

    const text = wrapper.find('Link').map((node) => node.text());
    expect(text).toEqual(['Previous', 'Next']);
  });
});
