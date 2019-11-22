import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';

import useAppContext from './hooks/useAppContext';
import AppContext from './contexts/AppContext';

import ModalSwitch from './components/ModalSwitch';
import { theme } from './theme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond|Raleway:400,700,900&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    width: 100vw;
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const appContextValue = useAppContext();
  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <ThemeProvider theme={theme}>
          <ModalSwitch />
        </ThemeProvider>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
