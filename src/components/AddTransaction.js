import React, { useState, useContext } from 'react';
import { TrackerContext } from '../context/TrackerState';

export const AddTransaction = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState();
    let [idValue, setIdValue] = useState(1);
    const { addTransaction } = useContext(TrackerContext);
    const submit = (e) => {
        e.preventDefault();
        if (document.getElementById('title').value === '') {
            alert('Please enter a title');
            document.getElementById('title').focus();
        }
        else if (document.getElementById('amount').value === '' || document.getElementById('amount').value === '0') {
            alert('Please enter an amount');
            document.getElementById('amount').focus();
        }
        else if (document.getElementById('amount').value.indexOf('-') !== -1) {
            alert('Please enter a positive amount');
            document.getElementById('amount').focus();
        }
        else {
            const newTransaction = {
                id: idValue,
                title,
                amount: +amount
            };
            if (e.target.className === 'exp-btn') {
                newTransaction.amount = amount * -1;
            }
            setIdValue(++idValue);
            addTransaction(newTransaction);
            setTitle('');
            setAmount('');
        }
    };
    return (
        <div className='add-transaction'>
            <h2>Add Transaction</h2><hr />
            <form>
                <div>
                    <label htmlFor='title'>Title</label><br />
                    <input type='text' id='title' value={title} placeholder='Enter title...' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label><br />
                    <input type='number' id='amount' value={amount} placeholder='Enter Amount...' onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className='btns'>
                    <button className='inc-btn' onClick={submit}>Add income</button>
                    <button className='exp-btn' onClick={submit}>Add expense</button>
                </div>
            </form>
        </div>
    )
}
