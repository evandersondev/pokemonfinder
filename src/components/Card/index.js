import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import Pokeball from '../../images/pokeball.png'

export default ({ pokemonName }) => {
  return (
    <Container>
      <div className="card">
        <Link to={`info/${pokemonName}`}>
          {pokemonName}
          <img src={Pokeball} alt="pokeball" />
        </Link>
      </div>
    </Container>
  )
}
