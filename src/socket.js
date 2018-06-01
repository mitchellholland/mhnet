import Stars from './Components/Stars'

var socket = null
const connectSocket = (completion) => {
  socket = new WebSocket('ws://imac.local:3000')

  socket.onopen = () => {
    console.log(`${socket}: onopen`)
  }

  socket.onclose = () => {
    console.log(`${socket}: onclose`)
  }

  socket.onmessage = (payload) => {
    const data = JSON.parse(payload.data)
    const stars = data.stars
    console.log(`payload: ${JSON.stringify(data)}, stars: ${stars}`)
    completion(stars)
  }
}

const sendStarRating = (starValue) => {
  const request = { 'stars': starValue }
  socket.send(JSON.stringify(request))
}

export { connectSocket, sendStarRating }