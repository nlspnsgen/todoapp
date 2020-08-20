import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import Header from "./Header";
import Form from "./InputTodo"
import DeleteAll from "./DeleteAll"
import Stats from "./Stats"
import Footer from "./Footer"
import axios from "axios";

const link = 'http://localhost:3001/todos';
// class component
class TodoContainer extends React.Component {

    state = {
        todos: [
        ],
        isLoading: false,
        showStats: false
    }
    componentDidMount() {
      axios.get(link)
          .then(
              response => { let data = response.data 
              this.setState({
                todos: data
              })
            } 
          );
  }
    onChangeCheckbox = (_id) => {
      const updatedTodosArr = this.state.todos.map(todo => {
          if(todo._id === _id) {
              todo.completed = !todo.completed;
          }
          return todo;
      })
      // console.log(updatedTodosArr);
      this.setState( {
          todos: updatedTodosArr
      } );
  }

    deleteTodoHandler = (_id) => {
      this.setState( { isLoading: true} );
      axios.delete(`${link}/${_id}`)
          .then(
              response => { 
                const deleteTodosArr = this.state.todos.filter(todo => todo._id !== response.data._id)
              this.setState({
                todos: deleteTodosArr,
                isLoading:false
              })} 
          );
    }
    addTodo = (newItem) => {
      this.setState( { isLoading: true} );
      let newItemUpdate= {
        title: newItem,
        completed: false
      } 
      axios.post(link, { ...newItemUpdate} )
          .then(
              response => {  
                axios.get(link)
          .then(
              response => { let data = response.data 
              this.setState({
                todos: data,
                isLoading:false
              })} 
          );
                } 
          );
    }
    deleteAll = (_id) =>{
        this.state.todos.map(todo => {
          this.setState( { isLoading: true} );
          axios.delete(`${link}/${todo._id}`)
              .then(
                  response => { 
                    const deleteTodosArr = this.state.todos.filter(todo => todo._id !== response.data._id)
                  this.setState({
                    todos: deleteTodosArr,
                    isLoading:false
                  })
                } 
              );
              return todo;
      })
    }
    statsAll = () => {
      let allTask = this.state.todos.length
      return allTask;
    }
    statsSuccess = () => {
      let successTask = 0;
      this.state.todos.map(todo => {
        if (todo.completed){
          successTask += 1
        }
        return successTask
      })
      return successTask
    }
    onChangeContainer = () => {
      

    }
    render() {
        return (
            <div className="container" style={ this.state.isLoading ? {opacity: 0.3} : null }>
                <Header />
                < Stats 
                statsAll = {this.statsAll} 
                statsSuccess = {this.statsSuccess}
                />
                <Form addTodo = {this.addTodo}/>
                <ul>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem
                                key={todo._id}
                                _id={todo._id}
                                title={todo.title}
                                completed={todo.completed}
                                handleChange={this.onChangeCheckbox}
                                deleteTodoHandler={this.deleteTodoHandler}
                              />
                        ))
                    }
                </ul>
                <DeleteAll deleteAll = {this.deleteAll} /> 
                <Footer />
            </div>
        );
    }
}

export default TodoContainer;
