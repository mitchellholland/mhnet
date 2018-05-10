const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
  console.log(`${socket}: onopen`)
}

socket.onclose = () => {
  console.log(`${socket}: onclose`)
}

socket.onmessage = (payload) => {
  console.log(`payload: ${payload.data}`)
}

const buttonPressed = () => {
  socket.send('button pressed')
}