import React from 'react';
import TodoItem from "./TodoItem/TodoItem";
import Header from "./Header";
import Form from "./InputTodo"
import { v4 as uuidv4 } from 'uuid';

// class component
class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "React lernen",
                completed: false
            },
            {
                id: uuidv4(),
                title: "JavaScript auffrischen (Klassen, usw.)",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Props verstehen",
                completed: false
            }
        ]
    }

    onChangeCheckbox = (id) => {
      const updatedTodosArr = this.state.todos.map(todo => {
          if(todo.id === id) {
              todo.completed = !todo.completed;
          }
          return todo;
      })
      // console.log(updatedTodosArr);
      this.setState( {
          todos: updatedTodosArr
      } );
  }

    deleteTodoHandler = (id) => {
      const deleteTodosArr = this.state.todos.filter(todo => todo.id !== id) 
        this.setState( {
          todos: deleteTodosArr
      } );
    
    }
    addTodo = (newItem) => {
      let newItemUpdate= {id: uuidv4(),
                  title: newItem.title,
                  completed: false
                } 
      const newArr = [...this.state.todos]
      newArr.push(newItemUpdate)  
      this.setState({
        todos: newArr
      })
      console.log(this.state.todos)
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Form addTodo = {this.addTodo}/>
                <ul>
                    {
                        this.state.todos.map(todo => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                handleChange={this.onChangeCheckbox}
                                deleteTodoHandler={this.deleteTodoHandler}
                              />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// functional component
// const TodoContainerFunction = (props) => {

//     return (
//         <div>
//             <h1>Hi, ich bin der TodoContainer!</h1>
//             <p>{props.text}</p>
//         </div>);
// };

export default TodoContainer;
