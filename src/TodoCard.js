import React from 'react'

const buttonStyle = {
  backgroundColor: "#61DAFB",
  color: "white",
  fontSize: "14px",
  padding: "5px 30px",
  borderRadius: "5px",
  margin: "10px 5px",
  cursor: "pointer"
}

const TodoCard = (props) => {

  // destructuring
  const {title, clickToRemove, index} = props

  return (
    <li style={{ color: "#61DAFB" }}>{title}
      <button style={ buttonStyle} onClick={() => {clickToRemove(index)}}>Remove</button>
    </li>
  )
}

export default TodoCard