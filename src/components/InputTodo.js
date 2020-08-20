import React, { useState } from 'react';
import "./InputTodo.scss"


const Form = (props) => {
    const [title, setTitle] = useState("");
    const [correctLength, setCorrectLength] = useState(true);
    const [at, setAt] = useState(false)

    const onChangeHandler = (e) => {
        setTitle(e.target.value)
        if(title.includes("@")){
            setAt(true)
        }else {
            setAt(false)
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (title.length > 3 && title.length < 25) {

            props.addTodo(title);

            setCorrectLength(true);
            setTitle("");

        } else { // incorrect length
            setCorrectLength(false);
        }
    }

    return (
        <>
            <form action="" onSubmit={onSubmitHandler} className="form-container">
                <input
                    className="input-text"
                    type="text"
                    placeholder="ToDo..."
                    value={title}
                    onChange={onChangeHandler}
                />
                <input type="submit" value="Send" className="input-submit" /> 
            </form>
            {correctLength ?
                null : 
                <p>Dein ToDo muss zwischen 3 und 25 Zeichen lang sein!</p>
            }
            {at ? <p>Please don't use @ in your Todos!</p> : null}
            
        </>
    );
}
export default Form;
