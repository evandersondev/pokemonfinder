import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';
import Pokeball from '../../images/pokeball.png';

export default ({ pokemon }) => {
  const history = useHistory();

  const getInfo = async (id) => {
    const { data } = await api.get(`pokemon/${id}`);

    history.push('/info', {
      pokemonInfo: {
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
      },
    });
  };

  return (
    <Container>
      {pokemon.map((pok) => (
        <button
          onClick={() => getInfo(pok.id)}
          type="button"
          key={pok.name}
          className="card"
        >
          <img src={pok.sprites.front_default} alt="Imagepokemon" />
          <h3>{pok.name}</h3>
          <span>
            <img src={Pokeball} alt="pokeball" />
            {pok.id}
          </span>
        </button>
      ))}
    </Container>
  );
};
