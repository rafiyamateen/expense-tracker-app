import React, { useContext } from 'react';
import { TrackerContext } from '../context/TrackerState';

export const Balance = () => {
    const { transactions } = useContext(TrackerContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const totalAmount = amounts.reduce((accumulator, item) => (accumulator += item), 0);
    return (
        <div className='balance'>
            <h3>Your Balance</h3>
            <h1>{totalAmount < 0 ? `-Rs. ${Math.abs(totalAmount)}` : `Rs. ${totalAmount}`}</h1>
        </div>
    )
}