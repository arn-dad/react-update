import React, { Component } from 'react';
import Itme from '../Item/Item';

const Company = (props) => {
    return (
      <div style={{ height: '90vh', overflowY: 'scroll', padding: 15 }}>
         {props.data.map((comp) => {
            return (
              <Itme key={comp.id} data={comp}/>
            )
          })}
      </div>
    );
}

export default Company;