const { connection, Sequelize } = require("../config/database")

module.exports = (connection, Sequelize) => {
    const user = connection.define("users", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    })

    return user
}
