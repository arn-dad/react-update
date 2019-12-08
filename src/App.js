import React, { useReducer, useContext } from 'react';
import Context from './context/context';
import reducer from './reducer/reducer'
import Form from './components/Form/Form';
import Booking from './components/Booking/Booking';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const initialState = useContext(Context)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className='container app'>
        <Form />
        <Booking />
      </div>
    </Context.Provider>
  );
}

export default App;