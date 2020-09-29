// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class ToDoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todoListContainer">
        {todos.map((_todo, _index) => {
          return <div key={_index}>{_todo}</div>;
        })}
      </div>
    );
  }
}

export default ToDoList;
