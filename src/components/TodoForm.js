import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  updateInput = (e) => {
    this.setState({ todo: e.target.value });
  };
  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
  };
  render() {
    return (
      <div className="addTodoContainer">
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
