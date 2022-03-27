import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

export const useLogin = () => useContext(StoreContext).login;
