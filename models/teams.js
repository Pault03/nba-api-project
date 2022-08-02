const teamsModel = (connection, Sequelize) => {
  return connection.define('nbateams', {
    Id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    TeamName: { type: Sequelize.STRING, allowNull: false },
    Location: { type: Sequelize.STRING },
    Conference: { type: Sequelize.STRING },
    createdAt: { type: Sequelize.DATE },
    updatedAt: { type: Sequelize.DATE }
  }, { paranoid: true })
}

module.exports = { teamsModel }
