import React from 'react';
import { Button } from 'primereact/button';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className='text-white p-4'>
      <h2 style={{ color: "#51F129 ",padding:"40px"}} >Expenses</h2>
      <table>
        <tbody>
          {expenses.map((expense, index) => (
            <tr style={{ justifyContent: 'space-between', display:"flex",width:"700px" }} key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>
                <Button onClick={() => onDeleteExpense(index)} icon="pi pi-times" severity="danger" />
              </td>
            </tr>
          ))}
        </tbody>
        <hr/>
      </table>
    </div>
  );
}

