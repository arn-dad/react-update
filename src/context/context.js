import React from 'react'

const Context = React.createContext({
  airline: [],
  countries: [],
  selectedAirline: null,
  selectedCountry: null
});

export default Context;