module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "joel123",
  DB: "db_itc_task_manager",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};