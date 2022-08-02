const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const { teamsModel } = require('./teams')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})



const teams = teamsModel(connection, Sequelize)

module.exports = { teams }

