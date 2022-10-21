const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const knex = require('knex')
const knexService = require('feathers-knex')

const dbConfig = require('./knexfile.js')
const database = knex(dbConfig.development)

const app = express(feathers())

app.get('', function (request, response) {
    response.send("kiwiiiii... WIKIII!");
  })

app.listen(3000, function () {
    console.log("Server listening on port 3000")
})
