/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Card from '../components/Card';

const pokemon = {
  name: 'Pokemon 1',
  url: 'url/pokemon/info',
};

describe('test render card component', () => {
  it('sould have a Card', () => {
    const wrapper = shallow(<Card pokemon={pokemon} />);

    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('should have a name pokemon into the Link', () => {
    const wrapper = shallow(<Card pokemon={pokemon} />);

    const pokemonName = wrapper.find('Link').text();

    expect(pokemonName).toEqual('Pokemon 1');
  });

  it('should have a img tag into the Link', () => {
    const wrapper = shallow(<Card pokemon={pokemon} />);

    expect(wrapper.find('img').parent().is('Link')).toBe(true);
  });
});
