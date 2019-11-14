import React from 'react';

import useAppContext from '../../hooks/useAppContext';

import AppContext from './context';

function AppStore({ children }) {
  const contextValue = useAppContext();

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppStore;
