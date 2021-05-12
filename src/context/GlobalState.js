import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
  { id: 1, text: 'Groceries', amount: -60 },
  { id: 2, text: 'Paycheck', amount: 500 },
  { id: 3, text: 'VideoGame', amount: -30 },
  { id: 4, text: 'PaperRoute', amount: 50 }
  ]
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