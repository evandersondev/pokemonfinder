import React from 'react';

import { Container } from './styles';
import Pokeball from '../../images/pokeball.svg';

export default () => {
  return (
    <Container>
      <div className="title">
        <h1>4</h1>
        <img src={Pokeball} alt="pokeballImage" />
        <h1>4</h1>
      </div>
      <h2>Uh-oh!</h2>
      <p>You look lost on your journey!</p>
      <a href="/">Go Back Home</a>
    </Container>
  );
};
