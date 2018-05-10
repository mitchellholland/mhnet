import { Server } from 'ws'

console.log(`started ${__filename} ${Date()}`)
var s = {stars: 3}

const server = new Server({ port: 3000 })
server.on('connection', socket => {
  
  socket.send(JSON.stringify(s))

  socket.on('message', (message: string) => {
    console.log('message: ' + message)
    const request = JSON.parse(message)
    s.stars = request.stars
    server.clients.forEach(client => {
      client.send(message)
    })
    console.log(`stars: ${s.stars}`)
  })
})

