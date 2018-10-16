import React, { Component } from 'react'
import './ImageView.css'

class ImageView extends Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      this.canvas = document.getElementsByClassName('ImageView-canvas')[0]
      this.canvasContext2d = this.canvas.getContext('2d')
      this.canvasContext2d.fillStyle = 'rgb(200, 0, 0)'
      this.canvasContext2d.fillRect(10, 10, 60, 60)

      this.canvasContext2d.fillStyle = 'rgb(0, 0, 200)'
      this.canvasContext2d.fillRect(40, 40, 60, 60)

      this.canvasContext2d.fillStyle = 'rgb(150,0,150)'

      this.el = document.getElementsByClassName('ImageView')[0]
    })
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
        width="1500"
        height="500"
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
