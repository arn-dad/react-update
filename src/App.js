import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      }
    case 'decrement':
        return {
          count: state.count - 1
      }  
    case 'reset':
        return initialState
    default:
      return initialState;
      break;
  }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <div>
        Count: <b>{state.count}</b>
        <br/>
        <button type="button" className="btn btn-info" onClick={() => { dispatch({ type: 'increment' }) }} >Increment</button>
        <button className="btn btn-danger" onClick={() => { dispatch({ type: 'decrement' }) }} >Decrement</button>
        <button className="btn btn-dark" onClick={() => { dispatch({ type: 'reset' }) }} >Reset</button>
      </div>
  );
}

export default App;