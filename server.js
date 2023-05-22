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

sequelizeConnection.authenticate().then(() => {
    console.log("Connection has been established!");
}).catch((error) => {
    console.log("Unable to connect to the database: ", error);
});