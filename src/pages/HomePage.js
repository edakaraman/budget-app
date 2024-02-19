import React, { useRef } from 'react';
import Header from '../components/Header';
import ExpenseDetail from '../components/ExpenseDetail';
import ExpenseList from '../components/ExpenseList';
import Footer from '../components/Footer';
import { useBudget } from '../context/BudgetContext';
import './Home.css'

export default function HomePage() {
  const { budget, expenses, handleBudgetChange, handleAddExpense, handleDeleteExpense } = useBudget();

  return (
    <>
      <Header />
      <div className='flex'>
        <div className="home">
          <h1 className="text-white"> Simplified Budget </h1>
          <ExpenseDetail onExpenseAdd={handleAddExpense} onBudgetChange={handleBudgetChange} />
        </div>
        <div className='expense'>
          <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </div>
      </div>
      <Footer budget={budget} expenses={expenses} />
    </>
  );
}
