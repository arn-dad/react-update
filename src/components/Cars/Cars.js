import React from 'react';
import Card from '../Card/Card'

const Cars = (props) => {
  return (
    <div style={{ height: '90vh', overflowY: 'scroll', padding: 15 }}>
     {props.data.map((car) => {
       return (
        <Card data={car}/>
       )
     })}
    </div>
  );
};

export default Cars;