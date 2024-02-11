import React, { useContext} from 'react';
import  { Transaction } from './Transaction';
import  { GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {

    const context = useContext(GlobalContext);

    console.log(context);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.nap(transaction => (<Transaction key={transaction.id} transaction={transaction}/> ))}

            </ul>
        </>
    );
}