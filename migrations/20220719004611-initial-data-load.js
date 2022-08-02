'use strict'

const teams = [

  {
    'Id': 1,
    'TeamName': 'Golden State Warriors',
    'Location': 'San Francisco, CA',
    'Conference': 'Western Conference'
  },

  {
    'Id': 2,
    'TeamName': 'Hawks',
    'Location': 'Atlanta, GA',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 3,
    'TeamName': '76ers',
    'Location': 'Philadelphia, PA',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 4,
    'TeamName': 'Knicks',
    'Location': 'New York City, NY',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 5,
    'TeamName': 'Bucks',
    'Location': 'Milwaukee, WI',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 6,
    'TeamName': 'Spurs',
    'Location': 'San Antonio, TX',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 7,
    'TeamName': 'Thunder',
    'Location': 'Oklahoma, OK',
    'Conference': 'Western Conference'
  },

  {
    'Id': 8,
    'TeamName': 'Magic',
    'Location': 'Orlando, FL',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 9,
    'TeamName': 'Timberwolves',
    'Location': 'Minnesota, MN',
    'Conference': 'Western Conference'
  },

  {
    'Id': 10,
    'TeamName': 'Lakers',
    'Location': 'Los Angeles, CA',
    'Conference': 'Western Conference'
  },

  {
    'Id': 11,
    'TeamName': 'Wizards',
    'Location': 'Washington, DC',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 12,
    'TeamName': 'Cavaliers',
    'Location': 'Cleveland, OH',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 13,
    'TeamName': 'Pelicans',
    'Location': 'New Orleans, LA',
    'Conference': 'Western Conference'
  },

  {
    'Id': 14,
    'TeamName': 'Nets',
    'Location': 'Brooklyn, NY',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 15,
    'TeamName': 'Raptors',
    'Location': 'Toronto, CA',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 16,
    'TeamName': 'Grizzles',
    'Location': 'Memphis, TN',
    'Conference': 'Western Conference'
  },

  {
    'Id': 17,
    'TeamName': 'Kings',
    'Location': 'Sacramento, CA',
    'Conference': 'Western Conference'
  },

  {
    'Id': 18,
    'TeamName': 'Celtics',
    'Location': 'Boston, MA',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 19,
    'TeamName': 'Mavericks',
    'Location': 'Dallas, TX',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 20,
    'TeamName': 'Bulls',
    'Location': 'Chicago, IL',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 21,
    'TeamName': 'Heat',
    'Location': 'Miami, FL',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 22,
    'TeamName': 'Rockets',
    'Location': 'Houston, TX',
    'Conference': 'Western Conference'
  },

  {
    'Id': 23,
    'TeamName': 'Jazz',
    'Location': 'Utah, UT',
    'Conference': 'Western Conference'
  },

  {
    'Id': 24,
    'TeamName': 'Pistons',
    'Location': 'Detroit, Mi',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 25,
    'TeamName': 'Suns',
    'Location': 'Phoenix, AZ',
    'Conference': 'Western Conference'
  },

  {
    'Id': 26,
    'TeamName': 'Pacers',
    'Location': 'Indiana',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 27,
    'TeamName': 'Hornets',
    'Location': 'Charlotte, NC',
    'Conference': 'Eastern Conference'
  },

  {
    'Id': 28,
    'TeamName': 'Nuggets',
    'Location': 'Denver, Co',
    'Conference': 'Western Conference'
  },

  {
    'Id': 29,
    'TeamName': 'Clippers',
    'Location': 'Los Angeles, CA',
    'Conference': 'Western Conference'
  },

  {
    'Id': 30,
    'TeamName': 'Trail Blazers',
    'Location': 'Portland, OR',
    'Conference': 'Western Conference'
  }

]

module.exports = {
  async up(queryInterface) { return queryInterface.bulkInsert('nbateams', teams)
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('nbateams')
  }
}
