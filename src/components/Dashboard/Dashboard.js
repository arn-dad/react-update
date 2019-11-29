import React, { useState, useEffect } from 'react';
// import isEqual from 'lodash/isEqual';
import Form from './Form';
import Table from '../Table';

import './dashboard.css';

// componentDidMount() {
//   window.addEventListener('resize', this.onWindowResize)
// }
// static getDrerivedStateFromProps(props, state) {}

// componentDidUpdate(prevProps, prevState) {}

// componentWillUnmount() {
//   console.log("#AR: Dashboard -> componentWillUnmount -> componentWillUnmount");
//     window.removeEventListener('resize',  this.onWindowResize)
//   }

const Dashboard = (props) => {
 const [state, setState ] = useState({
      todos    : props.todos || [],
      hide     : false
    });

    
 const onWindowResize = (event) => {
    if(window.innerWidth < 500) {
      setState({
        ...state,
        hide: true
      })
    }

    if(window.innerWidth > 500) {
       setState({
        ...state,
        hide: false
      })
    }
    console.log("onWindowResize", window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => {
      window.removeEventListener('resize',  onWindowResize)
    }
  }, [])


  const onSubmit = (todo) => {
    setState(({ todos, hide }) => ({
      todos: [...todos, todo],
      hide
    }))
  }

  const onRemove = (todo) => {
    setState(({ todos, hide }) => ({
      hide,
      todos: todos.filter(td => td !== todo)
    }))
  }
  
    const { todos, hide } = state;
    console.log('%c  RENDER DASHBOARD', 'background: green; color: white; display: block;')
    return (
      <div className="container dashboard">
        <div className="create-todo">
          {!hide && <Form onSubmit={onSubmit}/>}
        </div>

        <div className="show-todo">
          <Table todos={todos} onRemove={onRemove}/>
        </div>
        
      </div>
    );
}

export default React.memo(Dashboard);