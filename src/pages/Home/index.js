import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import api from 'services/api'

import Card from 'components/Card'
import Loading from 'components/Loading'
import { Container, Pagination } from './styles'

export default () => {
  const [pokemons, setPokemons] = useState([])
  const [pagination, setPagination] = useState({})
  const [loading, setloading] = useState(false)

  const query = queryString.parse(window.location.search)
  const page = parseInt(query.page || 1)
  const perPage = 21

  const fetchPokemon = async () => {
    setloading(true)

    const { results, previous, next } = await api.getAllPaginated({
      perPage,
      page,
    })

    setPokemons(results)
    setPagination({ previous, next })
    setloading(false)
  }

  useEffect(() => {
    fetchPokemon()
  }, [page])

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {pokemons &&
            pokemons.map(({ name }) => (
              <Card className="card" key={name} pokemonName={name} />
            ))}

          <Pagination>
            <Link
              disabled={pagination.previous === null}
              to={`?page=${page - 1}`}
            >
              Previous
            </Link>

            <Link disabled={pagination.next === null} to={`?page=${page + 1}`}>
              Next
            </Link>
          </Pagination>
        </>
      )}
    </Container>
  )
}
