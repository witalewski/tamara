import React, { Component } from 'react'
import ImageView from './components/ImageView/ImageView'
import ColorPicker from './components/ColorPicker/ColorPicker'
import './App.css'

class App extends Component {
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
            <ColorPicker />
          </nav>
          <ImageView />
        </div>
      </div>
    )
  }
}

export default App
