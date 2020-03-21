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
                        key={todo.id}
                    />
                )
            })}
        </div>
    )

}

export default TodoList;