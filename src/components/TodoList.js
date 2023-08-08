import React from 'react';
import './Todo.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const { newTodo, todoItems } = this.state;
    if (newTodo.trim() !== '') {
      const updatedTodoItems = [...todoItems, newTodo];
      this.setState({ todoItems: updatedTodoItems, newTodo: '' });
    }
  };

  handleDeleteTodo = (index) => {
    const { todoItems } = this.state;
    const updatedTodoItems = todoItems.filter((_, i) => i !== index);
    this.setState({ todoItems: updatedTodoItems });
  };

  render() {
    const { todoItems, newTodo } = this.state;

    return (
      <div className="todo-list-container">
        <h2>Smash your Tasks✅</h2>
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Enter a new todo"
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul className="todo-items">
          {todoItems.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
