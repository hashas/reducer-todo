import React, { useReducer, useState } from 'react';
import './App.css';

import { reducer, initialState } from './reducers/reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [formData, setFormData] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setFormData('')
  }

  const handleChange = event => {
      setFormData(event.target.value)
  }

  console.log(state)
  console.log(formData)

  return (
    <div className="App">
      <TodoList
        data={state}
      />
      <TodoForm 
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={formData}
      />
    </div>
  );
}

export default App;
