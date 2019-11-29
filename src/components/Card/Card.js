import React, { Component } from 'react';
import AppContext from '../../context/app-contex';

class Card extends Component {
  render() {
    const { model, last_name } = this.props.data;
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <div className="card" style={{ marginBottom: '5px' }}>
              <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">{last_name}</p>
              </div>
              {context.loggedIn && <button type="button" className="btn btn-dark">Remove</button>}
            </div>
          )
        }}
      </AppContext.Consumer>
    );
  }
}

export default Card;