import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './todo.css';

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
  }
  onInputChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  onSubmit = (todo) => {
    this.props.onSubmit(todo);
    this.setState({ todo: '' })
  }
  render() {
    const { todo } = this.state;
    console.log('%c  RENDER FORM', 'background: yellow; color: #000; display: block;')
    return (
      <div className='todo-app'>
        <Form.Control onChange={this.onInputChange} type="email" placeholder="Create Todo" value={todo} />
        <Button variant="primary" onClick={() => { this.onSubmit(todo) }}>
          Create
        </Button>
      </div>
    );
  }
}

export default FormComponent;