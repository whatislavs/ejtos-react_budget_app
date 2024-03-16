import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Location = () => {
  const {dispatch } = useContext(AppContext);
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
        <div className='alert alert-secondary' style={{backgroundColor:'#93e499', color:'white'}}> Currency {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)} style={{backgroundColor:'#93e499', color:'white', border:'none'}}>
        <option value="£" className="dropdown-item">£ Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
        <option value="$">$ Dollar</option>
      </select>
      
      }	
    </div>
    );
};
export default Location;