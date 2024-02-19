import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from "./pages/HomePage";
import StatisticPage from "./pages/StatisticPage";
import AllExpenses from "./pages/AllExpensesPage";


export default function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/allexpenses" element={<AllExpenses />} />
      </Routes>
    </BrowserRouter>
  );
}
