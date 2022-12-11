const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio')
const express = require('@feathersjs/express')
const knex = require('knex')
const knexService = require('feathers-knex')

const dbConfig = require('../knexfile.js')
const database = knex(dbConfig.development)

const app = express(feathers())

// Turn on JSON parser for REST services
app.use(express.json())

// Configure the Socket.io transport
app.configure(socketio({
  path: '/articles-socket-io',
}))

// Create a channel that will handle the transportation of all realtime events
app.on('connection', connection => app.channel('everybody').join(connection))

// Publish all realtime events to the `everybody` channel
app.publish(() => app.channel('everybody'))

// Feathers/Knex REST services
app.use('articles', knexService({ Model: database, name: 'articles' }))


app.listen(3030, function () {
    console.log("Server listening on port 3030")
})
