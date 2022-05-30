const express = require('express')


const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index',)
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on http://localhost:1337..') // eslint-disable-line no-console
})
