import React, { Component} from 'react';

class Form extends Component {
    state={
        title: "",
        correctLength: true
    };
    onChangeHandler = (e) => {
        this.setState({title:e.target.value})
    }
    onUpdateHandler = (e) => {
        e.preventDefault();
        // correct length
        if(this.state.title.length >3 && this.state.title.length < 25 ) {
            this.props.addTodo(this.state);
            // clear title and therefore text input
            this.setState({
                title: "",
                correctLength: true
            });
        } else { // incorrect length
            this.setState({
                correctLength: false
            });
        }
    }
    render() {
        return (
            <form className = "form-container" onSubmit = {this.onUpdateHandler}>
                <input 
                className= "input-text"
                type="text" 
                placeholder="ToDo" 
                value={this.state.title} 
                onChange={ this.onChangeHandler} />
                <input 
                type="submit" 
                value="Submit"
                className= "input-submit"
                />
                {this.state.correctLength ? null : <p>"Text muss zwischen 3-25 zeichen haben"</p>}
            </form>
            
        );
    }
}

export default Form;
