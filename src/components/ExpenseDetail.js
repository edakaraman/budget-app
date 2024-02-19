import React, { useState,useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useBudget } from '../context/BudgetContext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function ExpenseDetail({ onBudgetChange }) {
  const { handleAddExpense, selectedDate, setSelectedDate } = useBudget();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [budget, setBudget] = useState('');

  const toast = useRef(null);

  const handleNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.value);
  };

  const handleChange = (event) => {
    const newBudget = event.target.value;
    setBudget(newBudget);
    onBudgetChange(newBudget);
  };

  const handleAddClickWithToast = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Expense added successfully', life: 3000});
    handleAddClick();
}

  const handleAddClick = () => {
    if (expenseName.trim() !== '' && expenseAmount.trim() !== '' && selectedDate) {
      const newExpense = {
        id: generateId(),
        name: expenseName,
        amount: parseFloat(expenseAmount),
        date: selectedDate
      };
      handleAddExpense(newExpense);
      setExpenseName('');
      setExpenseAmount('');
      setSelectedDate(null);
    }
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <>
      <div className="flex flex-col pb-4 pt-4">
        <InputText
          id="budget"
          keyfilter="int"
          placeholder='Budget'
          onChange={handleChange}
          value={budget}
        />
      </div>
      <div className='flex gap-2'>
        <InputText
          type="text"
          placeholder="Expense"
          value={expenseName}
          onChange={handleNameChange}
        />
        <InputText
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={handleAmountChange}
        />
        <Calendar placeholder="Date" value={selectedDate} onChange={handleDateChange} />
        <Toast ref={toast} />
        <Button onClick={handleAddClickWithToast} icon="pi pi-plus" style={{backgroundColor:"#51F129"}} />

      </div>
    </>
  );
}
