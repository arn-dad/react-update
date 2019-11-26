import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class DataTable extends Component {
 
  removeTodo = (todo) => {
    this.props.onRemove(todo)
  }

  render() {
    const { todos } = this.props;
    console.log('%c  RENDER DATATABLE', 'background: blue; color: #fff; display: block;')
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Todos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <tr key={todo + index}>
                  <td>{index + 1}</td>
                <td>{todo}</td>
                <td>
                  <Button onClick={() => this.removeTodo(todo)} variant="link">Remove</Button>
                </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default DataTable;