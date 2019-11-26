import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos    : []
    };
  }

  componentDidMount() {}

  static getDrerivedStateFromProps(props, state) {}

  componentDidUpdate(prevProps, prevState) {}
  
  componentWillUnmount() {}

  // shouldComponentUpdate(nextProps, nextState) { }
  

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
    const { todos } = this.state;
    console.log('%c  RENDER DASHBOARD', 'background: green; color: white; display: block;')
    return (
      <div className="container dashboard">
        <div className="create-todo">
          <Form onSubmit={this.onSubmit}/>
        </div>

        <div className="show-todo">
          <Table todos={todos} onRemove={this.onRemove}/>
        </div>
        
      </div>
    );
  }
}

export default Dashboard;