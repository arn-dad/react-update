import React, { useContext } from 'react';
import Context from '../../context/context';
import Select from '../Select/Select';
import api from '../../api';

const selectBoxs = [
  {
    id: 'airline',
    name: 'airline',
    inputLabel: 'Select the Airline',
    field: 'airline'
  },
  {
    id: 'countries',
    name: 'countries',
    inputLabel: 'Select the Country',
    field: 'country'
  }
]

const Pickers = (props) => {
  const { state, dispatch } = useContext(Context);
  const { airline, countries, selectedAirline, selectedCountry } = state;

  const fetchCountries = (value) => {
    const query = { where: { country: { like: value } }}
    dispatch({ type: 'FETCH_AIRLINES', payload: [] })
    dispatch({ type: 'FETCH_COUNTRES', payload: [] }) // { country : { like: value } } }  // { where: {and: [{ like: { country: value } }, { like: { airline: 'Gol' }  }] }}
    api('countries', query).then(data => {
      dispatch({ type: 'FETCH_COUNTRES', payload: data })
    })
  }

  const fetchAirline = (value) => {
    const query = { where: { and: [ {country: { like: selectedCountry.country }}, { airline: { like: value } } ]} } // { country : { like: value } } }  // { where: {and: [{ like: { country: value } }, { like: { airline: 'Gol' }  }] }}
    api('airline', query).then(data => {
      dispatch({ type: 'FETCH_AIRLINES', payload: data })
    })
  }

  const onSelectCountry = (c) => {
    dispatch({ type: 'SELECT_COUNTRY', payload: c })
  }
  const onSelectAirline = (a) => {
    dispatch({ type: 'SELECT_AIRLINE', payload: a })
  }
  return (
    <div className="pickers">
       <Select filed='country' onSearch={fetchCountries} options={countries} select={onSelectCountry}/>
       <Select filed='airline' onSearch={fetchAirline} options={airline} select={onSelectAirline} />
    </div>
  );
};

export default Pickers;