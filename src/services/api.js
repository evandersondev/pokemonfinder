import { create } from 'axios';

const pokeApi = create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default {
  async getAllPaginated({ perPage, page = 1 }) {
    const offset = perPage * (page - 1);

    const {
      data: { results, previous, next },
    } = await pokeApi.get('/pokemon', {
      params: {
        offset,
        limit: perPage,
      },
    });

    return { results, previous, next };
  },

  async getPokemonByName({ name }) {
    const { data } = await pokeApi.get(`pokemon/${name}`);

    return data;
  },
};
