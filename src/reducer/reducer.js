export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_COUNTRES':
      return {
        ...state,
        countries: action.payload
      }
    case 'FETCH_AIRLINES':
      return {
        ...state,
        airline: action.payload
      }
    case 'SELECT_AIRLINE':
      return {
        ...state,
        selectedAirline: action.payload
      }
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload
      }    
    default:
      return state;
  }
}