/* eslint-disable no-undef */
import React from 'react';

import { shallow } from '../enzyme';

import Home from '../pages/Home';

describe('test render components in Home', () => {
  test('should be a Link', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('Link').exists()).toBe(true);
  });

  test('should be two Links', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.text()).toEqual('<_default />PreviousNext');
  });
});
