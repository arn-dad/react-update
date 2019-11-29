import React from 'react';
import Card from '../Card/Card'
import AppContext from '../../context/app-contex';

class Cars extends React.Component {

  static contextType = AppContext;
  
  componentDidMount() {
    console.log('context', this.context)
  }
  

  render () {
    return (
      <div style={{ height: '90vh', overflowY: 'scroll', padding: 15 }}>
       {this.props.data.map((car) => {
         return (
          <Card  key={car.id} data={car}/>
         )
       })}
      </div>
    );
  }
};

export default Cars;