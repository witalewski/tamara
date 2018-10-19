import React from 'react'

const PaletteItem = ({ color, setColor, selected }) => (
  <div
    className={`PaletteItem ${selected ? 'selected' : ''}`}
    style={{ backgroundColor: color }}
    onClick={() => setColor(color)}
  />
)

export default PaletteItem
