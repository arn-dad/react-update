import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
   this.interval = setInterval(() => {
     console.log('SET_STATE')
      this.setState({
        count: 1 + this.state.count
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    console.log('componentWillUnmount')
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        React life cycle {count}
      </div>
    );
  }
}

export default Counter;