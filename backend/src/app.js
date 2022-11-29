const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const knex = require('knex')
const knexService = require('feathers-knex')

const dbConfig = require('../knexfile.js')
const database = knex(dbConfig.development)

const app = express(feathers())

// On ajoute Cors pour permettre au front de faire des requetes
const cors = require('cors')
app.use(cors())

// JSON body parser middleware
app.use(express.json())
// Set up REST transport
app.configure(express.rest())

// Feathers/Knex REST services, met en place le service pour la table articles
app.use('/api/articles', knexService({ Model: database, name: 'articles' }))

app.listen(3000, function () {
    console.log("Server listening on port 3000")
})
