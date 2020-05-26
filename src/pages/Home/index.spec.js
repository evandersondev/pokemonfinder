/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import api from '../../services/api';

import Home from '.';

jest.mock('../../services/api', () => {
  return {
    getAllPaginated({ perPage, page = 1 }) {
      return {
        results: [{ name: 'spearow' }],
        previous: null,
        next: 'url/qualquer',
      };
    },
  };
});

describe('test render components in Home', () => {
  it('renders corretly', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
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
