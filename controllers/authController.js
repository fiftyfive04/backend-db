const db = require("../config/db.js")

const executeQuery = promisify(db.query).bind(db)
