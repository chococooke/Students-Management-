require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('testDB', process.env.MYSQL_UNAME, process.env.MYSQL_PASSWD, {
    host: 'localhost',
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established");
    } catch (err) {
        console.error("Unable to connect to the database", err);
    }
})();

module.exports = sequelize;