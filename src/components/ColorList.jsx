import React from 'react'
import { Link } from 'react-router-dom'

const ColorList = ({ colors }) => {
    return (
        <div>
          <main>
            <h2>Click on a color below to see it! </h2>
            <h3>List of available colors:</h3>
            <ul>
              {colors.map((color, index) => (
                <li key={index}>
                  <Link to={`/colors/${color}`}>{color}</Link>
                </li>
              ))}
            </ul>
            <h3>Or to add a new color 
            <Link to="/colors/new"> click here</Link>
            </h3>
          </main>
        </div>
      )
    }
export default ColorList
