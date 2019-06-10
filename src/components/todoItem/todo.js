import React from 'react'
import PropTypes from 'prop-types'
import './todo.css'
import { TiInputChecked } from 'react-icons/ti';
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    {!completed && <TiInputChecked style={{color: "#ffe470"}}/>}
    {completed && <TiInputChecked style={{color: "#a0ff75"}}/>}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo