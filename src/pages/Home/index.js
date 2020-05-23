import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

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

    setPokemon(results);
    setNextPage(next);
    setPreviousPage(previous);
    setloading(false);
  };

  const getInfo = async (name) => {
    const { data } = await api.get(`pokemon/${name}`);
    const pokemonInfo = {
      name: data.name,
      abilities: data.abilities,
      sprites: {
        front: data.sprites.front_default,
        back: data.sprites.back_default,
      },
      height: data.height,
      weight: data.weight,
      stats: data.stats,
      types: data.types,
    };

    history.push(`/info/${data.id}`, {
      pokemonInfo,
    });
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
          <Card pokemon={pokemon} getInfo={getInfo} />

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
