/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';

import Card from '../components/Card';

describe('test render card component', () => {
  test('sould have a Card', () => {
    const wrapper = shallow(<Card />);
    // console.log(wrapper.debug());
  });
});
