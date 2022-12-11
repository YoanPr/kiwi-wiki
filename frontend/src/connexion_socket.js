import feathers from '@feathersjs/client'
import io from 'socket.io-client'

const app = feathers();

const socket = io("http://localhost:3030", {
    
    path: '/articles-socket-io',
    transports: ["websocket"], // mandatory with Vite
 })

app.configure(feathers.socketio(socket))

export default app
