const IMAGE_WIDTH = 100
const IMAGE_HEIGHT = 100

const defaultState = {
  color: '#427e59',
  currentImage: new Array(IMAGE_WIDTH).fill(
    new Array(IMAGE_HEIGHT).fill('white', 0, IMAGE_HEIGHT),
    0,
    IMAGE_WIDTH
  ),
}

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      }
    case 'DRAW_PIXEL':
      const pixels = state.currentImage.map(e => e.slice())
      pixels[action.x][action.y] = action.color
      return {
        ...state,
        currentImage: pixels,
      }
    default:
      return state
  }
}

export default reduce
