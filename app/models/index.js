const Sequelize = require('sequelize');
const sequelizeConnection = new Sequelize(
    'biodata_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelizeConnection = sequelizeConnection;
db.biodata = require("./biodata.model.js")(sequelizeConnection, Sequelize);

module.exports = db;