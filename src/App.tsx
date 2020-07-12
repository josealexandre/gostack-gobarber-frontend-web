import React from 'react';

import GlobalStyle from './styles/global';

import Signin from './pages/Signin';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Signin />
    </>
  );
};

export default App;
