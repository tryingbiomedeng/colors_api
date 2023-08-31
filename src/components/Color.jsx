import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Color = () => {
  const { color } = useParams();

  return (
    <div>
      <main>
        <h2>This colour is</h2>
        <div className="color-container">
          <div className="color" style={{ backgroundColor: color, width: '100px', height: '100px' }}>
            <p className="color-name">{color}</p>
          </div>
          <Link to="/colors">Go Back to Colors List</Link>
        </div>
      </main>
    </div>
  )
}

export default Color
