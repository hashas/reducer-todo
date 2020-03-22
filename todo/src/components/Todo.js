import React from 'react'

const Todo = props => {
    console.log(props.status)
    return(
        <div
            style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}
            onClick={() => props.dispatch({type: 'TOGGLE', payload: props.data})}
        >
            {props.task}
        </div>
    )
};

export default Todo;