/* eslint-disable max-len */
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const { getAllTeams, getTeamById, getTeamsByLocation, saveNewTeams, getTeamsByConference } = require('./controllers/teams')

const app = express()

app.use(cors())

app.get('/api/teams', getAllTeams)

app.get('/api/teams/:Id', getTeamById)

app.get('/api/teams/Location/:Location', getTeamsByLocation)

app.get('/api/teams/Conference/:Conference', getTeamsByConference)

app.post('/', bodyParser.json(), saveNewTeams)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
