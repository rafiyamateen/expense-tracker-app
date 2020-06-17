import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { HistoryList } from './components/HistoryList';
import { AddTransaction } from './components/AddTransaction';
import {TrackerProvider} from './context/TrackerState';

function App() {
  return (
    <TrackerProvider>
      <Header />
      <div className='section'>
        <Balance />
        <IncomeExpense />
        <HistoryList />
        <AddTransaction />
      </div>
    </TrackerProvider>
  );
}

export default App;
