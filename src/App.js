import React, { Component } from 'react'
import ImageView from './components/ImageView/ImageView'
import ColorPicker from './components/ColorPicker/ColorPicker'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { color: '#427e59' }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span role="img" aria-label="Woman painter">
              👩🏻‍🎨
            </span>{' '}
            Tamara
          </h1>
        </header>
        <div className="App-main">
          <nav className="App-nav">
            <ColorPicker setColor={color => this.setState({ color })} />
          </nav>
          <ImageView color={this.state.color} />
        </div>
      </div>
    )
  }
}

export default App
