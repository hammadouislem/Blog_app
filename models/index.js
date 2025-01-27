const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD , {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize.sync()
.then(() => console.log('Database synced'))
.catch(err => console.error('Error syncing database:', err));
const Blog = require('./BlogModel')(sequelize, DataTypes);


module.exports = { Blog, sequelize };
