import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import { reducer, initialState } from './reducers/reducer'
import TodoList from './components/TodoList'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)
  
  return (
    <div className="App">
      <TodoList
        data={state}
      />
    </div>
  );
}

export default App;
