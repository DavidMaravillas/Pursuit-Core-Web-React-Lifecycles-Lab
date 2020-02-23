import React from 'react';
import './App.css';
import Form from './Form/Form'
import TodoList from './TodosList/TodosList';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
      state = {
        todoItem : "",
        todoList : []
      }

  handleSubmit=(e)=>{
    e.preventDefault()

    debugger
    let newItem= e.target.todoItem.value
      this.setState(prevState=>({
        todoItem:newItem,
        todoList:[...prevState.todoList,newItem]
      })
    )
  }
  handleDelete=(e)=>{
    debugger
  }
  render () {
    console.log(this.state)
    return (
      <div className="App">
        Hello World
        <Form onSubmit={this.handleSubmit}/>
        <TodoList list={this.state.todoList} onClick={this.handleDelete}/>
      </div>
    );
  }


  }

export default App;
