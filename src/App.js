import React, { Component } from 'react';
import Todos from './components/Todos'

export class App extends Component{
  state = {
    todos: [
        {
            id: 1,
            title: 'task 001',
            completed: false
        },
        {
            id: 2,
            title: 'task 002',
            completed: false
        },
        {
            id: 3,
            title: 'task 003',
            completed: false
        }
    ]
  }
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
