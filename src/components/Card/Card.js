import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { model, last_name } = this.props.data;
    console.log("#AR: Card -> render -> this.props", this.props);
    return (
      <div className="card" style={{ marginBottom: '5px' }}>
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
          <p className="card-text">{last_name}</p>
        </div>
        <button type="button" className="btn btn-dark">Remove</button>
      </div>
    );
  }
}

export default Card;