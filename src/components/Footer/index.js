import React from 'react'

import { Container } from './styles'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'

export default () => {
  return (
    <Container>
      <p>
        2020 &copy; - made by <strong>evandersondev</strong> 🖖
      </p>
      <div className="social">
        <a
          href="https://github.com/evandersondev/pokemonfinder"
          target="_blank"
        >
          <img src={Github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/evanderson-vasconcelos"
          target="_blank"
        >
          <img src={Linkedin} alt="Github" />
        </a>
      </div>
    </Container>
  )
}
