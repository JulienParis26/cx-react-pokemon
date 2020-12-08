const knex = require('knex')
const dotenv = require('dotenv')

module.exports = function() {
  dotenv.config()

  const { DATABASE_HOST: host, DATABASE_PORT, DATABASE_USER: user, DATABASE_PASS: password, DATABASE_NAME: database } = process.env

  return knex({
    client: 'pg',
    connection: {
      host,
      port: parseInt(DATABASE_PORT, 10),
      user,
      password,
      database
    }
  })

}