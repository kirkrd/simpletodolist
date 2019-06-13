import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'
const Link = ({ active, children, onClick }) => (

  <button
    className="filterButton"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
      color: "black",
      border: active ? "1px solid ": " 1px solid #ebdddd",
      backgroundColor: active ? "#bbffcc" : "#fff787"
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link