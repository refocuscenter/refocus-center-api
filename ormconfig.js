const dotenv = require('dotenv')
const { DB_MS, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, ORM_SYNC, SQL_DEBUG } = process.env;

//Init .env
dotenv.config();

module.exports = {
  type: DB_MS,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  
  synchronize: true,
  logging: !!SQL_DEBUG,
  
  entities: ["build/src/models/**/*.js"],
  subscribers: ["build/src/subscriber/**/*.js"],
  migrations: ["build/src/migration/**/*.js"],

  cli: {
    entitiesDir: "build/src/models",
    migrationsDir: "build/src/migration",
    subscribersDir: "build/src/subscriber",
  },
};
