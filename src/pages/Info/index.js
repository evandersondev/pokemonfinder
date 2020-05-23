import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Profile,
  Characteristc,
  Stats,
  Abilites,
  Types,
} from './styles';

export default ({ location: { state } }) => {
  const [showBack, setShowBack] = useState(false);
  const { pokemonInfo } = state;
  const history = useHistory();

  const clickShowBack = () => {
    !showBack ? setShowBack(true) : setShowBack(false);
  };

  return (
    <Container>
      <button onClick={() => history.goBack()} type="button">
        Back
      </button>

      <Profile>
        <h2>{pokemonInfo.name}</h2>

        <div className="image-container">
          <img
            onClick={clickShowBack}
            src={
              showBack
                ? pokemonInfo.sprites.back_default
                : pokemonInfo.sprites.front_default
            }
            alt="ImagePokemon"
          />
          <span>click to see my back</span>
        </div>

        <strong>
          {pokemonInfo.height * 10}
          cm - {pokemonInfo.weight / 10}
          kg
        </strong>
      </Profile>

      <Characteristc>
        <Stats>
          <h3>Base stats</h3>

          <ul>
            {pokemonInfo.stats.map(({ base_stat, stat: { name } }) => (
              <li key={name}>
                {name}: {base_stat}
              </li>
            ))}
          </ul>
        </Stats>

        <Abilites>
          <h3>Abilities</h3>
          <ul>
            {pokemonInfo.abilities.map(({ ability: { name } }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Abilites>
      </Characteristc>

      <Types>
        <h3>Types</h3>
        <ul>
          {pokemonInfo.types.map(({ type: { name } }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </Types>
    </Container>
  );
};
