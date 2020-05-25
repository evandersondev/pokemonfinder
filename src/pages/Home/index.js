import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import api from '../../services/api';
import { Container, Pagination } from './styles';

import Card from '../../components/Card';
import Loading from '../../components/Loading';

export default () => {
  const [pokemons, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [loading, setloading] = useState(false);

  const query = queryString.parse(window.location.search);
  const page = parseInt(query.page || 1);
  const offset = 21 * (page - 1);

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

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {pokemons.map((pokemon) => (
            <Card className="card" key={pokemon.name} pokemon={pokemon} />
          ))}

          <Pagination>
            <Link disabled={previousPage === null} to={`?page=${page - 1}`}>
              Previous
            </Link>

            <Link disabled={nextPage === null} to={`?page=${page + 1}`}>
              Next
            </Link>
          </Pagination>
        </>
      )}
    </Container>
  );
};
