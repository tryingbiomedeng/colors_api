import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import ColorList from './components/ColorList'
import Color from './components/Color'
import ColorForm from './components/ColorForm'

import './App.css'

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue'])

  const addColor = (newColor) => {
    setColors([newColor, ...colors])
  };

  return (
    <div>
      <h1>Colors App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/colors" />} />
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<ColorForm onAddColor={addColor} />} />
        <Route path="/colors/:color" element={<Color />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  )
}

export default App
