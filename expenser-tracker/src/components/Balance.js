import React, { useContext } from 'react';
import  { GlobalContext} from '../context/GlobalState';


export const Header = () => {
    const context = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <h2>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </h2>
    );
}