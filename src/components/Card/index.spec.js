/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Card from '.';

describe('test render card component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card pokemonName="Pikachu" />);

    expect(wrapper).toMatchSnapshot();
  });
});
