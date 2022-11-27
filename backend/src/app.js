const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const knex = require('knex')
const knexService = require('feathers-knex')

const dbConfig = require('./knexfile.js')
const database = knex(dbConfig.development)

const app = express(feathers())

// JSON body parser middleware
app.use(express.json())
// Set up REST transport
app.configure(express.rest())

// Feathers/Knex REST services
app.use('/api/articles', knexService({ Model: database, name: 'articles' }))

app.listen(3000, function () {
    console.log("Server listening on port 3000")
})
