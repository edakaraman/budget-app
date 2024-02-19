import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function Header() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                navigate('/home')
              },
        },
        {
            label: 'Statistic',
            icon: 'pi pi-list',
            command: () => {
                navigate('/statistic')
              },
        },
        {
            label: 'All Expenses',
            icon: 'pi pi-star',
            command: () => {
                navigate('/allexpenses')
              },
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}








  


        
        