export const setColor = color => ({
  type: 'SET_COLOR',
  color,
})

export const drawPixel = (x, y, color) => ({
  type: 'DRAW_PIXEL',
  x,
  y,
  color,
})
