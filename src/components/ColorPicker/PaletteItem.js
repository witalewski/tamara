import React from 'react'

const PaletteItem = ({ color, setColor }) => (
  <div
    className="PaletteItem"
    style={{ backgroundColor: color }}
    onClick={() => setColor(color)}
  />
)

export default PaletteItem
