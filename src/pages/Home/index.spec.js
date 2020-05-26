/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

describe('test render components in Home', () => {
  it('should have two links', () => {
    const wrapper = shallow(<Home pokemonName="Pikachu" />);

    expect(wrapper.find('Link').length).toBe(2);
  });

  it('should a Link with name Previous and Next', () => {
    const wrapper = shallow(<Home pokemonName="Pikachu" />);

    const text = wrapper.find('Link').map((node) => node.text());
    expect(text).toEqual(['Previous', 'Next']);
  });
});
