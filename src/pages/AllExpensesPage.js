import React from 'react'
import Header from '../components/Header'
import TableExpenses from '../components/TableExpenses'
import Footer from '../components/Footer'
import { useBudget } from '../context/BudgetContext';

export default function AllExpensesPage() {
  const { budget, expenses } = useBudget();

  const allExpensesStyle = {
    height: '86vh',
  }

  return (
    <>
      <div style={allExpensesStyle}>
        <Header />
        <TableExpenses />
      </div>
      <Footer budget={budget} expenses={expenses} />
    </>
  )
}
