import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useBudget } from '../context/BudgetContext';

export default function TableExpenses() {
    const { expenses } = useBudget();

    return (
        <div className="card">
            <DataTable value={expenses} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID" sortable style={{ width: '10%',color:"#5A63B5" }} />
                <Column field="name" header="Gider" sortable style={{ width: '10%',color:"#5A63B5" }} />
                <Column field="amount" header="Fiyat" sortable style={{ width: '10%',color:"#5A63B5" }} />
                <Column field="date" header="Tarih" sortable style={{ width: '10%',color:"#5A63B5" }} body={(rowData) => (
                    <span>{rowData.date.toLocaleDateString()}</span>
                )} />
           </DataTable>
        </div>
    );
}
