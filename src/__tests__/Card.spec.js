/* eslint-disable no-undef */
import React from 'react';

import { shallow } from 'enzyme';

import Card from '../components/Card';

const pokemon = [
  { id: 1, name: 'Pokemon 1' },
  { id: 1, name: 'Pokemon 2' },
];

describe('test render card component', () => {
  test('sould have a Card', () => {
    const wrapper = shallow(<Card pokemon={pokemon} />);
    console.log(wrapper.debug());
  });
});
