import React from 'react';
import './App.css';
import Form from './Form/Form'
import TodoList from './TodosList/TodosList';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
      state = {
        toDoItem : "",
        toDoList : []
      }

  handleSubmit=(e)=>{
    e.preventDefault()

    let newItem= e.target.todoItem.value
    this.setState(prevState=>({
      toDoItem:newItem,
      toDoList:[...prevState.toDoList,newItem]
    })
    )
  }
  handleDelete=(e)=>{
    e.preventDefault()
    let deleteIdx= Number(e.target.parentNode.id)
    
    this.setState((prevState)=>{
      let filterToDo= prevState.toDoList.filter((item,i)=>{

        return i !== deleteIdx
      })
      return {toDoList:filterToDo}
    })



    // this.setState({
    //   toDoList:[...this.state.toDoList.slice(0,deleteIdx),...this.state.toDoList.slice(deleteIdx+1,this.state.toDoList.length+1)]
    // })
  }
  render () {
    console.log(this.state)
    return (
      <div className="App">
        Hello World
        <Form onSubmit={this.handleSubmit}/>
        <TodoList list={this.state.toDoList} onClick={this.handleDelete}/>
      </div>
    );
  }


  }

export default App;
