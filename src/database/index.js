const mysql = require('mysql')
const credentials = {
  user: 'root',
  password: 'root',
  database: 'ana_perfumes',
  host: 'localhost',
  insecureAuth: true,
}

const db = mysql.createPool(credentials)

exports.select = async query => {
  return new Promise((resolve, reject) => {
    db.query(query, (err, results, fields) => {
      if (!err) {
        resolve(results)
      } else {
        reject(err)
      }
    })
  })
}

exports.execQuery = async (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results, fields) => {
      if (!err) {
        resolve(results)
      } else {
        reject(err)
      }
    })
  })
}

exports.escape = text => db.escape(text)
