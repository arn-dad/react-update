import React, { PureComponent } from 'react';
// import isEqual from 'lodash/isEqual';
import Form from './Form';
import Table from './Table';

import './dashboard.css';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      todos    : [],
      hide     : false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize)
  }

  onWindowResize = (event) => {
    if(window.innerWidth < 500) {
      this.setState({
        hide: true
      })
    }

    if(window.innerWidth > 500) {
      this.setState({
        hide: false
      })
    }
    console.log("onWindowResize", window.innerWidth);
  }

  static getDrerivedStateFromProps(props, state) {}

  componentDidUpdate(prevProps, prevState) {}
  
  componentWillUnmount() {
  console.log("#AR: Dashboard -> componentWillUnmount -> componentWillUnmount");
    window.removeEventListener('resize',  this.onWindowResize)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(!isEqual(nextProps, this.props)) {
  //     return true;
  //   }
  //   return false;
  //  }
  

  onSubmit = (todo) => {
    this.setState(({ todos }) => ({
      todos: [...todos, todo]
    }))
  }

  onRemove = (todo) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(td => td !== todo)
    }))
  }
  
  render() {
    const { todos, hide } = this.state;
    console.log('%c  RENDER DASHBOARD', 'background: green; color: white; display: block;')
    return (
      <div className="container dashboard">
        <div className="create-todo">
          {!hide && <Form onSubmit={this.onSubmit}/>}
        </div>

        <div className="show-todo">
          <Table todos={todos} onRemove={this.onRemove}/>
        </div>
        
      </div>
    );
  }
}

export default Dashboard;