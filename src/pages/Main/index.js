import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Pagination } from './styles';

import Card from '../../components/Card';
import Loading from '../../components/Loading';

export default () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [offset, setOffset] = useState(0);
  const [loading, setloading] = useState(false);

  const fetchPokemon = async (page = 0) => {
    setloading(true);
    const {
      data: { results, next, previous },
    } = await api.get('/pokemon', {
      params: {
        offset: page,
        limit: 21,
      },
    });

    const pokemonData = [];

    for (const item of results) {
      const itemResponse = await api.get(item.url);

      if (itemResponse.data) {
        pokemonData.push(itemResponse.data);
      }
    }

    setPokemon(pokemonData);
    setNextPage(next);
    setPreviousPage(previous);
    setloading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const nextPaginate = () => {
    if (!nextPage === false) {
      fetchPokemon(offset + 20);
      setOffset(offset + 20);
    }
  };

  const PrevPaginate = () => {
    if (!previousPage === false) {
      fetchPokemon(offset - 20);
      setOffset(offset - 20);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card pokemon={pokemon} />
          <Pagination>
            <button
              disabled={previousPage === null}
              onClick={PrevPaginate}
              type="button"
            >
              Previous
            </button>
            <button
              disabled={nextPage === null}
              onClick={nextPaginate}
              type="button"
            >
              Next
            </button>
          </Pagination>
        </>
      )}
    </Container>
  );
};
