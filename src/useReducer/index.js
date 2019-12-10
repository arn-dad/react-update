const initialState = { data: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}


const useReducer = (r, s) => {
  let localState = s;
  console.log('initial State', localState);
  const dispatch = (action) => {
   const newState = r(localState, action);
   localState = newState;
   console.log('after dispatch ',localState);
  } 

  return [
    localState, 
    dispatch
  ]
}


const [ state, dispatch ] = useReducer(reducer, initialState)

dispatch({ type: 'UPDATE', payload: [1,2,3] })

setTimeout(() => {
  dispatch({ type: 'UPDATE', payload: [1,2,3,45,6,4] })
}, 1000)