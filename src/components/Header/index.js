import React from 'react'

<<<<<<< HEAD
import Logo from 'images/logo.png';
import { Container } from './styles';
=======
import { Container } from './styles'
import Logo from '../../images/logo.png'
>>>>>>> code-review

export default () => {
  return (
    <Container>
      <header>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Pokemon Finder" />
            <h1>PokFinder</h1>
          </a>
        </div>
      </header>
    </Container>
  )
}
