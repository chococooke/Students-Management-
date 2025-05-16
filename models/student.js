const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect.js");

const Student = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    }
});

async function syncDatabase() {
    try {
        await sequelize.sync({ force: false });
        console.log('Student table has been created');
    } catch(err){
        console.log(err);
    }
}

syncDatabase();

module.exports = Student;