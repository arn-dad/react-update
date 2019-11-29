import React from 'react';
import Table from '../Table';

const Home = (props) => {
  const todos = props.todos || []
  return (
    <div>
      <Table todos={todos} onRemove={() => {}}/>
    </div>
  );
};

export default Home;