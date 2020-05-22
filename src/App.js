import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
