import React, { Component } from 'react';

class OnlyOdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
   this.interval = setInterval(() => {
      this.setState({
        count: 1 + this.state.count
      })
    }, 500)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 2 > 0) {
      return true
    }
    return false
  }

  componentWillUnmount() {
    clearInterval(this.interval)
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

export default OnlyOdd;