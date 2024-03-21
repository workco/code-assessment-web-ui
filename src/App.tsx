import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import AppContext from './contexts/AppContext';
import ProductLanding from './pages/ProductLanding';
import useAppContextValue from './hooks/useAppContext';

const App: React.FC = () => {
  const appContextValue = useAppContextValue();

  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductLanding />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
