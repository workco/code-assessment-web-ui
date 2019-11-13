import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppStore from './contexts/app/store';

import './App.scss';
import ModalSwitch from './components/ModalSwitch';

function App() {
  return (
    <AppStore>
      <Router>
        <ModalSwitch />
      </Router>
    </AppStore>
  );
}

export default App;
