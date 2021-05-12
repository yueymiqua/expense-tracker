import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
}

// Create context
export const globalContext = createContext(initialState);

// Provider component
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD TRANSACTION',
      payload: transaction
    });
  }

  return (<globalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}  
  </globalContext.Provider>)
}