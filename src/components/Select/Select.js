import React, { useState } from 'react';

const Select = (props) => {
  const { options, onSearch, filed, select } = props;
  const [state, setState] = useState({ search: '', selectedValue: null });
  const { selectedValue } = state;

  const onInputChange = ({ target: { value } }) => {
    onSearch(value);
    setState({
      ...state,
      search: value
    });
  }

 const selectItem = (d) => {
    setState({
      ...state,
      selectedValue: d
    });
    select(d)
  }

  return (
    <div class="card" style={{width: "350px"}} >
      <input value={state.value} onChange={onInputChange} className="form-control" type="text"/>
      <small id="emailHelp" className="form-text text-muted">Select the Country</small>
      <div className="select-options">
        {options.map((opt) => {
        const value = filed === 'airline' ?  opt.airline : opt.country
          return (
            <div class="alert alert-primary select-option" role="alert">
              {value}
              <div className="custom-control custom-checkbox">
                <input 
                  disabled={selectedValue && selectedValue.id !== opt.id} 
                  
                  checked={selectedValue && selectedValue.id === opt.id} 
                  type="checkbox" 
                  className="custom-control-input" 
                  id={`customCheck1-${opt}`} 
                />
                <label onClick={() => { selectItem(opt) }} className="custom-control-label" htmlFor={`customCheck1-${opt}`}></label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Select;