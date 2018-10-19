import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawPixel } from '../../actions'
import './ImageView.css'

class ImageView extends Component {
  constructor(props) {
    super(props)
    this.lastMouseMove = [0, 0]
  }
  drawImage(image) {
    image.forEach((column, i) => {
      column.forEach((row, j) => {
        this.canvasContext2d.fillStyle = row
        this.canvasContext2d.fillRect(i * 20, j * 20, 20, 20)
      })
    })
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.canvas = document.getElementsByClassName('ImageView-canvas')[0]
      this.canvasContext2d = this.canvas.getContext('2d')
      this.drawImage(this.props.currentImage)
      // this.drawTamaraPortrait()
      this.canvasContext2d.fillStyle = this.props.color
    })
  }

  componentDidUpdate() {
    this.drawImage(this.props.currentImage)
    this.canvasContext2d.fillStyle = this.props.color
  }

  findPixel(eventClientX, eventClientY) {
    const canvasOffset = this.canvas.getBoundingClientRect()
    return [
      eventClientX - canvasOffset.left,
      eventClientY - canvasOffset.top,
    ].map(e => Math.floor(e / 20))
  }
  handleCanvasMouseDown(event) {
    this.fillInProgress = true
    this.props.drawPixel(
      ...this.findPixel(event.clientX, event.clientY),
      this.props.color
    )
  }

  drawLine(startX, startY, endX, endY) {
    const [fromX, fromY] = this.findPixel(
      Math.min(startX, endX),
      Math.min(startY, endY)
    )
    const [toX, toY] = this.findPixel(
      Math.max(startX, endX),
      Math.max(startY, endY)
    )
    for (let i = fromX; i <= toX; i++) {
      const segmentFromY = fromY + Math.floor((i - fromX) / (toX - fromX))
      const segmentToY = Math.floor(
        (i + Math.sign((endX = startX)) - fromX) / (toX - fromX)
      )
      for (let j = segmentFromY; j <= segmentToY; j++) {
        this.props.drawPixel(i, j, this.props.color)
      }
    }
  }

  handleCanvasMouseMove(event) {
    const [x, y] = [event.clientX, event.clientY]
    if (this.fillInProgress) {
      this.drawLine(x, y, ...this.lastMouseMove)
    }
    this.lastMouseMove = [x, y]
  }

  handleCanvasMouseUp(event) {
    const [x, y] = [event.clientX, event.clientY]
    if (this.fillInProgress) {
      this.drawLine(x, y, ...this.lastMouseMove)
    }
    this.lastMouseMove = [x, y]
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

const mapStateToProps = state => ({
  color: state.color,
  currentImage: state.currentImage,
})

const mapDispatchToProps = dispatch => ({
  drawPixel: (x, y, color) => dispatch(drawPixel(x, y, color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageView)
