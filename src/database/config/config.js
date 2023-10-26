const envs = require("../../config/enviroments/enviroments");

module.exports = {
  development: {
    username: envs.DB_USERNAME,
    password: envs.DB_PASSWORD,
    database: envs.DB_DATABASE,
    host: envs.DB_HOST,
    dialect: envs.DB_DIALECT,
    loging: false,
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "null",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
