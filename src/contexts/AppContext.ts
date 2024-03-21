import React from 'react';
import { IAppContext } from '../hooks/useAppContext';

export default React.createContext<IAppContext | null>(null);
