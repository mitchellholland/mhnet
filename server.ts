import { Server } from 'ws'

const server = new Server({ port: 3000 })
server.on('connection', socket => {
  socket.on('message', message => {
    server.clients.forEach(client => {
      client.send(`message: ${message}`)
    })
  })
})

console.log(`application started... ${new Date()}`)