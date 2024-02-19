import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useBudget } from '../context/BudgetContext';

const ExpenseChart = () => {
  const { expenses } = useBudget();

  const chartData = expenses.map(expense => {
    const expenseDate = new Date(expense.date);
    expenseDate.setDate(expenseDate.getDate() + 1);
    return {
      x: expenseDate,
      y: expense.amount
    };
  });

  // Grafik ayarları
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Expense Analysis',
      align: 'left'
    },
    subtitle: {
      text: 'Expense Trends Over Time',
      align: 'left'
    },
    labels: chartData.map(data => data.x),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart options={options} series={[{ name: "Expense", data: chartData }]} type="area" height={400} />
      </div>
      <div id="html-dist"></div>
    </>
  );
};

export default ExpenseChart;