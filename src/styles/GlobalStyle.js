import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100%;
    height: 100%;
  }

  body{
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    color: #fff;
    background: #181818;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  a{
    text-decoration: none;
  }

  button{
    font-family: 'Press Start 2P', cursive;
  }
`;

export default GlobalStyle;
