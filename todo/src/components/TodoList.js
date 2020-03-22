import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    console.log(props.data)
    return (
        <div>
            {props.data.map( todo => {
                return(
                    <Todo 
                        task={todo.item}
                        // key={todo.id}
                        status={todo.completed}
                        data={todo}
                        dispatch={props.dispatch}
                        handleClick={props.handleClick} // remove this
                    />
                )
            })}
        </div>
    )

}

export default TodoList;