import React from 'react';

import { Container } from './styles';
import Pokeball from '../../images/pokeball.png';

export default ({ pokemon, getInfo }) => {
  return (
    <Container>
      {pokemon.map(({ name }) => (
        <div key={name} className="card">
          <button onClick={() => getInfo(name)} type="button">
            {name}
            <img src={Pokeball} alt="pokeballImage" />
          </button>
        </div>
      ))}
    </Container>
  );
};
