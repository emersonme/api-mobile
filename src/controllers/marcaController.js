const {notFound} = require('../models/error')
const Marca = require('../models/marca')

exports.getMarcas = async (req, res, next) => {
  try {
    const marcas = await Marca.findAll()
    if (marcas.length === 0) {
      throw notFound
    }
    res.status(200).json(marcas)
  } catch (error) {
    next(error)
  }
}
