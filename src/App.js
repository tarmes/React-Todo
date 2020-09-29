import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

const toDoList = [
  {
    task: "Wake Up",
    id: 123,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    })
  }

  toggleTask = (taskId) => {
    console.log(taskId);
    this.setState({
      toDoList: this.state.toDoList.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      toDoList: this.state.toDoList.filter((task) => !task.completed)
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className="header">
          <h1>To-Do List</h1>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          toDoList={this.state.toDoList}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
