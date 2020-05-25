/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import api from '../__mocks__/api';

import Info from '../pages/Info';

const mock = new MockAdapter(axios);

describe('Test Info page', () => {
  it('render all', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Info />
      </MemoryRouter>
    );

    mock.onGet('/pokemon', { params: { name: 'fearow' } }).reply(200, {
      data: api,
    });

    axios.get('/pokemon', { params: { name: 'fearow' } }).then((response) => {
      console.log(response.data);
    });

    // expect(wrapper.find('h2').exists()).toBe(true);
  });
});
