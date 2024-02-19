import React from 'react';

export default function Footer({ budget, expenses }) {

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;
  let balanceColor = balance > 0 ? 'green' : (balance < 0 ? 'red' : 'black');

  return (
    <div className="p-3 flex-row bg-gray-200">
    <div className="flex flex-row justify-between">
      <div className='flex flex-column'>
        <h3>Budget</h3>
        <h1> ₺{budget}</h1>
      </div>
      <div className='flex flex-column ml-auto mr-auto' >
        <h3>Expenses</h3>
        <h1> ₺{totalExpenses}</h1>
      </div>
      <div className='flex flex-column'>
        <h3>Balance</h3>
        <h1 style={{ color: balanceColor }}> ₺{Math.abs(balance)}</h1>
      </div>
    </div>
  </div>
  
  );
}
