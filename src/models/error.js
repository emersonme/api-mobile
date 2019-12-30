const notFound = new Error("Dados não encontrados")
notFound.code = 404

module.exports = { notFound }
