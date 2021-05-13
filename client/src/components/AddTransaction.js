import React, { useState, useContext } from 'react'

import { globalContext } from '../context/GlobalState';

function AddTransaction() {
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(globalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      category,
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    
    setCategory('');
    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Enter item category..." />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter item name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - for expense, positive + for income)</label
          >
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;