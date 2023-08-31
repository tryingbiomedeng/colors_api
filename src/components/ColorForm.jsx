import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ColorForm = ({ onAddColor }) => {
  const [color, setColor] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddColor(color)
    navigate('/colors')
  };

  return (
    <div>
      <h2>Add new color here: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ColorForm;
