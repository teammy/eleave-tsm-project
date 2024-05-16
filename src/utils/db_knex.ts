export const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST_KNEX,
    port: process.env.DB_PORT_KNEX,
    user: process.env.DB_USER_KNEX,
    password: process.env.DB_PASSWORD_KNEX,
    database: process.env.DB_NAME_KNEX,
    debug: true
  }
})

