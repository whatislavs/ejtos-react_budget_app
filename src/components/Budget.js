import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
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
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleSaveBudget} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;
