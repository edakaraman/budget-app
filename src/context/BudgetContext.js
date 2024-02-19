import React, { createContext, useContext, useState, useRef } from 'react';
import { Toast } from 'primereact/toast';

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [idCounter, setIdCounter] = useState(1); 
    const toast = useRef(null);

    const handleBudgetChange = (newBudget) => {
        setBudget(newBudget);
    };

    const handleAddExpense = (newExpense) => {
        const expenseWithDateAndId = { ...newExpense, date: selectedDate, id: idCounter }; 
        setIdCounter(idCounter + 1); 
        setExpenses([...expenses, expenseWithDateAndId]);
        if (toast.current) { 
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Expense added successfully', life: 3000 });
        }
    };

    const handleDeleteExpense = (index) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
        if (toast.current) { 
            toast.current.show({ severity: 'warn', summary: 'Success', detail: 'Expense deleted successfully', life: 3000 });
        }
    };

    return (
        <BudgetContext.Provider value={{ budget, expenses, selectedDate, handleBudgetChange, handleAddExpense, handleDeleteExpense, setSelectedDate }}>
            <Toast ref={toast} />
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudget = () => useContext(BudgetContext);
