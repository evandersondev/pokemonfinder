import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Profile,
  Characteristc,
  Stats,
  Abilites,
  Types,
} from './styles';

export default ({ match }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [showBack, setShowBack] = useState(false);

  const history = useHistory();
  const pokemonName = match.params.name;

  const clickShowBack = () => {
    !showBack ? setShowBack(true) : setShowBack(false);
  };

  const getPokemon = async () => {
    const { data } = await api.get(`pokemon/${pokemonName}`);

    setPokemonInfo(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      {pokemonInfo && (
        <>
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
        </>
      )}
    </Container>
  );
};
