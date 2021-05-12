import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(globalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.category}: {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
          <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
    </li>
  )
}