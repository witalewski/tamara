import React, { Component } from 'react'
import './ImageView.css'

class ImageView extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      const canvas = document.getElementsByClassName('ImageView-canvas')[0]
      this.canvasContext2d = canvas.getContext('2d')
      this.canvasContext2d.fillStyle = 'rgb(200, 0, 0)'
      this.canvasContext2d.fillRect(10, 10, 50, 50)

      this.canvasContext2d.fillStyle = 'rgb(0, 0, 200)'
      this.canvasContext2d.fillRect(30, 30, 50, 50)

      this.canvasContext2d.fillStyle = 'rgb(150,0,150)'

      this.canvasOffset = canvas.getBoundingClientRect()
      this.el = document.getElementsByClassName('ImageView')[0]
    })
  }

  fillPixel(eventClientX, eventClientY) {
    requestAnimationFrame(() => {
      const [x, y] = [
        eventClientX - this.canvasOffset.left,
        eventClientY - this.canvasOffset.top,
      ].map(e => e - (e % 10))
      this.canvasContext2d.fillRect(x, y, 10, 10)
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
        width="10000"
        height="10000"
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
