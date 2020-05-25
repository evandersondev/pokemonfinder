import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Pokeball from '../../images/pokeball.png';

export default ({ pokemon }) => {
  return (
    <Container>
      <div className="card">
        <Link to={`info/${pokemon.name}`}>
          {pokemon.name}
          <img src={Pokeball} alt="pokeballImage" />
        </Link>
      </div>
    </Container>
  );
};
