import React from "react";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("has no todos");
    }
  };

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, todo] });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodoFn={this.addTodo}></TodoForm>
        <ToDoList todos={this.state.todos}></ToDoList>
      </div>
    );
  }
}

export default App;
