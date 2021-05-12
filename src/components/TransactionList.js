import React, { useContext } from 'react'
import Transaction from './Transaction';

import { globalContext } from '../context/GlobalState';

function TransactionList() {
  const { transactions } = useContext(globalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} 
          transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList;