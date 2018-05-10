const socket = new WebSocket('ws://localhost:3000')

socket.onopen = () => {
  console.log(`${socket}: onopen`)
}

socket.onclose = () => {
  console.log(`${socket}: onclose`)
}


socket.onmessage = (payload) => {
  const data = JSON.parse(payload.data)
  const stars = data.stars as number
  console.log(`payload: ${data}, stars: ${stars}`)

  const starsParagraph = document.getElementById('stars') as HTMLElement
  starsParagraph.innerHTML = `stars: ${stars}`
}

const buttonPressed = () => {
  const randomStarValue = Math.floor(Math.random() * 5) + 1 
  const request = {'stars': randomStarValue}
  socket.send(JSON.stringify(request))
}