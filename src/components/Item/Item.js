import React, { useContext } from 'react';
import AppContext from '../../context/app-contex';

const Item = (props) => {
  const context = useContext(AppContext);
  return (
    <div className="alert alert-info" role="alert" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {props.data.model}
      {context.loggedIn && <button type="button" className="btn btn-outline-info">Info</button>}
    </div>
  );
};

export default Item;