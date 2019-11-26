import React, { Component } from 'react';
import Toggle from './toggle';

class ClassApp extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR');
    
    this.state = {
      count  : 0,
      toggle : false,
      timer  : 0,
      data   : []
    }
  }

  componentDidMount() {
    console.log('componentDidMount calls after first render');

    fetch('https://it-blog-posts.herokuapp.com/api/posts')
      .then((response) => {
        if(response.status !== 200) {
          throw new Error()
        }
        return response.json().then((data) => {
          this.setState({
            data: data
          })
        })
      })
      .catch((err) => {
        console.log("#AR: App -> componentDidMount -> err", err);
      })
    setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate calls after state or props updated');
    console.log("#AR: App -> componentDidUpdate -> prevState", prevState);
    console.log("#AR: App -> componentDidUpdate -> prevProps", prevProps);
  }

  handleClick = () => {
    console.log('click');
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  handleToggleClick = () => {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle
      }
    })
  }

  render() {
    const { count, data, toggle, timer } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>{`Click ${count}`}</button>
        <button onClick={this.handleToggleClick}>{toggle ? 'On' : 'Off'}</button>
        <Toggle toggle={toggle} timer={timer}/>
        {data.map((item) => {
          return (
          <div style={{ border: '1px solid #ccc', padding: '5px', margin: '5px' }} key={item.id}>{item.title}</div>
          )
        })}
      </div>
    );
  }
}

export default ClassApp;