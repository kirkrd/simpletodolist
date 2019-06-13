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
    <p className="todoText">
    {text}
    {!completed && <TiInputChecked style={{color: "#ffe470", marginTop: "2px"}}/>}
    {completed && <TiInputChecked style={{color: "#a0ff75", marginTop: "2px"}}/>}
    </p>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo