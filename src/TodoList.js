import React, { Component } from 'react'
class TodoList extends Component {
  render() {
      function handleAddItem() {
          console.log("Button Clicked");
      }
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit" onClick="handleAddItem"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default TodoList