import React, { useContext, useState } from 'react';
import Context from '../../context/context'
import api from '../../api';

const Booking = () => {
  const { state } = useContext(Context);
  const [bookState, setState] = useState({ creating: false, response: null })
  const { creating, response } = bookState
  const { selectedAirline, selectedCountry } = state;

  const onBookTicket = () => {
    setState({
      ...bookState,
      response: null,
      creating: true
    })
    const book = {
      country: selectedCountry,
      airline: selectedAirline,
    }
    setTimeout(() => {
      api('bookings', null, { method: 'POST', body: JSON.stringify(book) })
        .then((data) => {
          setState({
            ...bookState,
            response: data,
            creating: false
          })
        })
    },1000)
  }

  return (
    <div>
     {!response && (
      <button 
        type="button" 
        onClick={onBookTicket}
        disabled={!selectedAirline || !selectedCountry} 
        className={`btn ${creating ? 'btn-warning' : 'btn-secondary'}`}
      >
        {creating && (
          <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Loading...
          </>
        )}
        {!creating && 'Book a ticket'}
      </button>
     )} 
      {response && (
        <span><b>Booked:</b> {response.country}: <i>{response.airline}</i> </span>
      )}
    </div>
  );
};

export default Booking;