import React from 'react';

import { Container } from './styles';
import Logo from '../../images/logo.png';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';

export default () => {
  return (
    <Container>
      <header>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Pokemon Finder" />
            <h1>Pokemon Finder</h1>
          </a>
        </div>

        <div className="social">
          <a href="https://github.com/evandersondev" target="blank">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/evanderson-vasconcelos"
            target="blank"
          >
            <img src={Linkedin} alt="Github" />
          </a>
        </div>
      </header>
    </Container>
  );
};
