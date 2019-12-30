const db = require('../database')

exports.findByDate = async date => {
  const query = `SELECT l.*, m.COMISSAO, m.IMAGE_LINK        
        FROM lancamentos l                  
        INNER JOIN marcas m on (m.id = l.marcaid)
        WHERE DATE(data) = ${db.escape(date)}`

  return await db.select(query)
}

exports.insert = async lancamento => {
  return await db.execQuery(`INSERT INTO lancamentos SET ?  `, [lancamento])
}
