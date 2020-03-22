import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <form onSubmit={event => {props.handleSubmit(event)}}> 
                <input
                    value={props.value}
                    input="text"
                    placeholder="Enter new task..."
                    onChange={(event) => props.handleChange(event)}
                />
                <button onClick={() => props.dispatch({ type: 'ADD_TODO', payload: props.value })}>Add Todo</button>
                <button onClick={() => props.dispatch({ type: 'CLEAR'})}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;