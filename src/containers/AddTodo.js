import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import "./container.css"
// eslint-disable-next-line react/prop-types
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input style={{width: "20em", height: "2em"}} ref={node => (input = node)} />
        <button className="addTodoButton"  type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)