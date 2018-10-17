import React, { Component } from 'react'
import PaletteItem from './PaletteItem'
import './ColorPicker.css'

class ColorPicker extends Component {
  render() {
    const colors = [
      '#427e59',
      '#f5e9cf',
      '#7aac98',
      '#ceb18e',
      '#c2d2bf',
      '#000000',
      '#ffffff',
    ]
    return (
      <div className="ColorPicker">
        {colors.map(color => (
          <PaletteItem
            key={color}
            color={color}
            setColor={() => this.props.setColor(color)}
          />
        ))}
      </div>
    )
  }
}

export default ColorPicker
