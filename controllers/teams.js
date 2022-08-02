const models = require('../models/index.js')

const getAllTeams = async (request, response) => {
  const foundTeam = await models.teams.findAll()

  return response.send(foundTeam)
}

const getTeamById = async (request, response) => {
  try {
    const { Id } = request.params

    const foundId = await models.teams.findOne({ where: { Id: Id } })

    return response.send(foundId)
  } catch (error) {
    console.log(error)
  }
}

const getTeamsByLocation = async (request, response) => {
  try {
    const { Location } = request.params

    const foundTeams = await models.teams.findAll({ where: { Location } })

    return response.send(foundTeams)
  } catch (error) {
    console.log(error)
  }
}
const getTeamsByConference = async (request, response) => {
  try {
    const { Conference } = request.params

    const foundConferences = await models.teams.findAll({ where: { Conference } })

    return response.send(foundConferences)
  } catch (error) {
    console.log(error)
  }
}

const saveNewTeams = async (request, response) => {
  try {
    const { TeamName, Location, Conference } = request.body

    if (!TeamName || !Location || !Conference) {
      return response.status(400).send('The following fields are required: TeamName, Location, Conference')
    }

    const newTeam = await models.teams.create({ TeamName, Location, Conference })

    return response.status(201).send(newTeam)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllTeams,
  getTeamsByLocation,
  getTeamsByConference,
  getTeamById,
  saveNewTeams
}

