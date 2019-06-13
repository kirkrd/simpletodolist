import React from 'react'
import Footer from './components/footer/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css'
const App = () => (
  <div className="App">
    <div className="App-header">
     <div className="main">
      <div className = "border">
        <div className = "inner-cutout"> 
          <h1 className="knockout">Simple <br/> Todolist</h1>
        </div>
      </div>
    </div>
    </div>
    <div className="App-Container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    
  </div>
)

export default App