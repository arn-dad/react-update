import React from 'react';

const Item = (props) => {
  return (
    <div class="alert alert-info" role="alert" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {props.data.model}
      <button type="button" class="btn btn-outline-info">Info</button>
    </div>
  );
};

export default Item;