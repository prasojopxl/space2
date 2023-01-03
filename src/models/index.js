const db = require("../config/database")

db.user = require("./user.model")(db.connection, db.Sequelize)

module.exports = db
