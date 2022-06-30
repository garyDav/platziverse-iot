'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
    //const { database, username, password, host, dialect, logging, setup, pool, query } = config
    /*sequelize = new Sequelize(
      database,
      encodeURIComponent(username),
      encodeURIComponent(password),
      {
        host,
        dialect,
        pool,
        logging,
        setup,
        query
      }
    )*/
  }
  return sequelize
}
