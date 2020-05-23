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

  const fetchPokemon = async () => {
    setloading(true);

    const {
      data: { results, next, previous },
    } = await api.get('/pokemon', {
      params: {
        offset,
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

    history.push(`/info/${data.id}`, {
      pokemonInfo: data,
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const nextPaginate = () => {
    if (!nextPage === false) {
      setOffset(offset + 20);
    }
  };

  const PrevPaginate = () => {
    if (!previousPage === false) {
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
