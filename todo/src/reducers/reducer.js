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
            // return state.concat({ item: "hasan", // action.payload event.target.value
            //                     completed: false,
            //                     id: new Date().valueOf() // new Date().valueOf()
            //  })
        default:
            return state;
    }
}

