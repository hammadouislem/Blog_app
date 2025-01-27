require('dotenv').config();
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT,
    logging: false,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL successfully!');
    } catch (error) {
        console.error('Unable to connect to PostgreSQL:', error);
    }
})();

(async () => {
  try {
      await sequelize.sync({ force: false });
      console.log(' Database & tables created!');
  } catch (error) {
      console.error(' Error syncing database:', error);
  }
})();

module.exports = sequelize;

