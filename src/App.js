import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useAppContext from './hooks/useAppContext';
import AppContext from './contexts/AppContext';

import './App.scss';
import ModalSwitch from './components/ModalSwitch';

function App() {
  const appContextValue = useAppContext();
  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <ModalSwitch />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
