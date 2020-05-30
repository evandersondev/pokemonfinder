import React, { useState, useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import api from '../../services/api'
import { heightInCm, weightInKg } from '../../utils'

import {
  Container,
  Profile,
  Characteristc,
  Stats,
  Abilites,
  Types,
} from './styles'

export default () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [showBack, setShowBack] = useState(false)

  const history = useHistory()
  const pokemonName = useRouteMatch().params.name

  const clickShowBack = () => {
    !showBack ? setShowBack(true) : setShowBack(false)
  }

  const getPokemon = async () => {
    const pokemon = await api.getPokemonByName({ name: pokemonName })
    setPokemonInfo(pokemon)
  }

  useEffect(() => {
    getPokemon()
  }, [])

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
                alt={pokemonInfo.name}
              />
              <span>click to see my back</span>
            </div>

            <strong>
              {heightInCm(pokemonInfo.height)}
              cm - {weightInKg(pokemonInfo.weight)}
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
  )
}
