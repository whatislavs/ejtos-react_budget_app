import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleSaveBudget = () => {
        // Dispatch action to update budget in context
        dispatch({
            type: 'SET_BUDGET',
            payload: parseFloat(newBudget), // Ensure newBudget is a number
        });
    };
    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            handleSaveBudget();
        }
    };
    return (
<div className='alert alert-secondary'>
<span style={{marginRight:'0.3rem'}}>Budget: {currency}{budget}</span>
<input type="number" step="10" style={{width:'10rem'}} value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;
