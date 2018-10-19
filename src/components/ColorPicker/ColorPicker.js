import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setColor } from '../../actions'
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
      'magenta',
      'cyan',
    ]
    return (
      <div className="ColorPicker">
        {colors.map(color => (
          <PaletteItem
            key={color}
            color={color}
            setColor={() => this.props.setColor(color)}
            selected={color === this.props.color}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  color: state.color,
})

const mapDispatchToProps = dispatch => ({
  setColor: color => dispatch(setColor(color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker)
