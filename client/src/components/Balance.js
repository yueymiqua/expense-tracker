import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

function Balance() {
  const { transactions } = useContext(globalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 className="balance-header">Balance</h4>
      <h1 className="balance-total">${numberWithCommas(total)}</h1>
    </>
  )
}

export default Balance;
