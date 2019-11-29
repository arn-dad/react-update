import React, { Component } from 'react';
import Itme from '../Item/Item';

class Company extends Component {
  render() {
    return (
      <div style={{ height: '90vh', overflowY: 'scroll', padding: 15 }}>
         {this.props.data.map((comp) => {
            return (
              <Itme data={comp}/>
            )
          })}
      </div>
    );
  }
}

export default Company;