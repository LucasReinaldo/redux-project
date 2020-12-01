import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global.styles';

import store from './ReduxStore';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Home />
      </Provider>
    </>
  );
};

export default App;
