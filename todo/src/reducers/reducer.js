// import React from 'react'
// import TodoForm from '../components/TodoForm'

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Build a simple reducer and initial state',
        completed: false,
        id: 1528817077286
    },
]

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { 
                    item: action.payload,
                    completed: false,
                    id: new Date().valueOf()
                }
            ]   
            // alternative method of adding an object to state:
            // return state.concat({ item: action.payload,
            //                     completed: false,
            //                     id: new Date().valueOf()
            //  })
        
        case 'TOGGLE':
            return state.map(todo => 
                // alternative method using conditional rendering
                // couldn't understand how the spread operator was being used 
                // action.payload.id === todo.id ? {...todo, completed: !todo.completed} : todo
                {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed
                        return todo
                      } else {
                        return todo
                      }
                }
            )
        default:
            return state;
    }
}

