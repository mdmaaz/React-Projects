import './App.css';
import React from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends React.Component{
  state = {
    todos:[],
    todoToShow: 'all'
  }

  addTodo = todo =>{
    this.setState({
      todos: [todo,...this.state.todos]
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          return{
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDeleteTodo = (id)=>{
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  removeAllTodosThatAreComplete= ()=>{
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }
  render(){
    let todos = [];

    if(this.state.todoToShow === 'all'){
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active'){
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete'){
      todos = this.state.todos.filter(todo => todo.complete);
    }


    return (
      <div className="App">
        <header className="header">
          <h1>Todo List</h1>
        </header>
        <Form onSubmit={this.addTodo}/>
        {todos.map(todo => (
          <TodoList 
          key={todo.id} 
          toggleComplete={() => this.toggleComplete(todo.id)}
          onDelete= {() => this.handleDeleteTodo(todo.id)}
          todo={todo}/>
        ))}
        
        <div className="footer">
          <div>Items left: {this.state.todos.filter(todo => !todo.complete).length}</div>
          <button className="footer-button" onClick= {() => this.updateTodoToShow('all')}>all</button>
          <button className="footer-button" onClick= {() => this.updateTodoToShow('active')}>active</button>
          <button className="footer-button" onClick= {() => this.updateTodoToShow('complete')}>complete</button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div className="clear">
            <button className="clear-button" onClick={this.removeAllTodosThatAreComplete}>
              Clear Completed Items
            </button>
          </div>
        ) : null} 
      </div>
    );
  }
}

export default App;

