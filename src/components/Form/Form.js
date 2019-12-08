import React, { useEffect, useContext } from 'react';
import Context from '../../context/context'
import api from '../../api';

const Form = () => {
  const { state, dispatch } = useContext(Context);
  const { airline, countries } = state;

  useEffect(() => {
    api('airline').then((data) => {
      dispatch({ type: 'FETCH_AIRLINES', payload: data })
    })
    api('countries').then((data) => {
      dispatch({ type: 'FETCH_COUNTRES', payload: data })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSelectChange = (e) => {
    const { name, value } = e.target;
    if (name === 'airline') {
      dispatch({type: 'SELECT_AIRLINE', payload: value })
    } else {
      dispatch({type: 'SELECT_COUNTRY', payload: value })
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <select name='country' placeholder='Select the Country' onChange={onSelectChange} className="custom-select" id="inputGroupSelect01">
          <option value=''></option>
         {airline.map((item) => {
           return <option key={item.id} value={item.airline}>{item.airline}</option>
         })}
        </select>
     </div>
     <div className="input-group mb-3">
        <select name='airline' onChange={onSelectChange} className="custom-select" id="inputGroupSelect01">
          <option value=''></option>
          {countries.map((item) => {
           return <option key={item.id} value={item.country}>{item.country}</option>
          })}
        </select>
     </div>
    </div>
  );
};

export default Form;