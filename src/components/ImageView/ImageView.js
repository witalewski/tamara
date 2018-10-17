import React, { Component } from 'react'
import './ImageView.css'

class ImageView extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      this.canvas = document.getElementsByClassName('ImageView-canvas')[0]
      this.canvasContext2d = this.canvas.getContext('2d')
      this.drawTamaraPortrait()
      this.canvasContext2d.fillStyle = this.props.color
    })
  }

  componentDidUpdate() {
    this.canvasContext2d.fillStyle = this.props.color
  }

  drawTamaraPortrait() {
    let i, j
    this.canvasContext2d.fillStyle = '#427e59'
    for (i = 10; i < 19; i++) {
      for (j = 10; j < 19; j++) {
        this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
      }
    }
    this.canvasContext2d.fillStyle = '#f5e9cf'
    for (i = 13; i < 15; i++) {
      for (j = 12; j < 15; j++) {
        this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
      }
    }
    i = 14
    j = 15
    this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
    this.canvasContext2d.fillStyle = '#ceb18e'
    for (i = 13; i < 16; i++) {
      j = 11
      this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
    }
    i = 15
    for (j = 11; j < 15; j++) {
      this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
    }
    this.canvasContext2d.fillStyle = '#7aac98'
    for (i = 13; i < 15; i++) {
      for (j = 16; j < 19; j++) {
        this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
      }
    }
  }

  fillPixel(eventClientX, eventClientY) {
    requestAnimationFrame(() => {
      const canvasOffset = this.canvas.getBoundingClientRect()
      const [x, y] = [
        eventClientX - canvasOffset.left,
        eventClientY - canvasOffset.top,
      ].map(e => e - (e % 20))
      this.canvasContext2d.fillRect(x, y, 20, 20)
    })
  }
  handleCanvasMouseDown(event) {
    this.fillInProgress = true
    this.fillPixel(event.clientX, event.clientY)
  }

  handleCanvasMouseMove(event) {
    if (this.fillInProgress) {
      this.fillPixel(event.clientX, event.clientY)
    }
  }

  handleCanvasMouseUp(event) {
    this.fillInProgress = false
  }

  render() {
    const canvas = (
      <canvas
        width="2000"
        height="2000"
        className="ImageView-canvas"
        onMouseDown={event => this.handleCanvasMouseDown(event)}
        onMouseMove={event => this.handleCanvasMouseMove(event)}
        onMouseUp={event => this.handleCanvasMouseUp(event)}
      />
    )
    return <div className="ImageView">{canvas}</div>
  }
}

export default ImageView
