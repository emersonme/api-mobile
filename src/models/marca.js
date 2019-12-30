const db = require('../database')

exports.findAll = async () => {
  return await db.execQuery(`SELECT * FROM marcas`)
}
