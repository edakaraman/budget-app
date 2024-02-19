import React from 'react'
import Header from '../components/Header'
import ExpenseChart from '../components/ExpenseChart'
import Footer from '../components/Footer'
import { useBudget } from '../context/BudgetContext';

export default function StatisticPage() {
  const { budget, expenses } = useBudget();

  const statisticStyle = {
    height: '86vh',
  };

  return (
    <>
      <div style={statisticStyle}>
        <Header />
        <ExpenseChart />
      </div>
      <Footer budget={budget} expenses={expenses} />
    </>
  )
}
