const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('dummyUser',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name: Sequelize.STRING,
    email:Sequelize.STRING,
})

module.exports = User;